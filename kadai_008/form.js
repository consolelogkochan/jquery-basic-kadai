$(function() {
    // classがbtnの要素がクリックされたら
    $('.btn').on('click', function() {
        // classがtext-boxの要素の値を'クリックしました！'に変更
        $('.text-box').val('クリックしました！');
    });
});