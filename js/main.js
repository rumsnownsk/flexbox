$(function () {
    $('.btn-holder__item_purple').click(function () {
        $('.case__holder').toggleClass('justify-content-start');
    });

    $('.btn-holder__item_orange').click(function () {
        $('.case__holder').toggleClass('justify-content-between');
    });

    $('.btn-holder__item_green').click(function () {
        $('.case__holder').toggleClass('justify-content-end');
    });

    $('.btn-holder__item_violet').click(function () {
        $('.case__holder').toggleClass('direction-column');
    });
});