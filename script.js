$(document).ready(function() {
  // 検索フォームの送信処理
  $('#searchForm').submit(function(e) {
    e.preventDefault();
    var keyword = $('#keyword').val().toLowerCase();
    var category = $('#category').val();
    var level = $('#level').val();
    var userName = $('#userName').val().toLowerCase();

    // 動画リストを検索
    $('#video-list li').each(function() {
      var title = $(this).data('title').toLowerCase();
      var videoCategory = $(this).data('category');
      var videoLevel = $(this).data('level');
      var videoUser = $(this).data('user').toLowerCase();

      var match = true;

      // キーワード検索
      if (keyword && title.indexOf(keyword) === -1 && videoCategory.indexOf(keyword) === -1 && videoLevel.indexOf(keyword) === -1 && videoUser.indexOf(keyword) === -1) {
        match = false;
      }

      // カテゴリ検索
      if (category && category !== videoCategory) {
        match = false;
      }

      // 対象レベル検索
      if (level && level !== videoLevel) {
        match = false;
      }

      // ユーザ名検索
      if (userName && videoUser.indexOf(userName) === -1) {
        match = false;
      }

      // 一致する場合、表示、一致しない場合は非表示
      if (match) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });
  });

  // 投稿フォームの送信処理（今回はalertを表示するだけ）
  $('#uploadForm').submit(function(e) {
    e.preventDefault();
    alert('投稿機能は現在利用できません。');
  });
});
