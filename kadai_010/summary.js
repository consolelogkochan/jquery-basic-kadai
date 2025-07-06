$(function() {
    // idがchange-colorの要素がクリックされたときの処理
    $('#change-color').on('click', function() {
        // idがtargetの要素の文字の色を赤色に変更
        $('#target').css('color', 'red');
    });
    // idがchange-textの要素がクリックされたときの処理
    $('#change-text').on('click', function() {
        // idがtargetの要素の文字をHello!に変更
        $('#target').text('Hello!');
    });
    // idがfade-outの要素がクリックされたときの処理
    $('#fade-out').on('click', function() {
        // idがtargetの要素をフェードアウト
        $('#target').fadeOut();
    });
    // idがfade-inの要素がクリックされたときの処理
    $('#fade-in').on('click', function() {
        // idがtargetの要素をフェードイン
        $('#target').fadeIn();
    });
});