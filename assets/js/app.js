//tabs block 03

$(document).ready(function() {
    $("#content div").hide(); // Скрываем содержание
    $("#tabs button:first").attr("id","current"); // Активируем первую закладку
    $("#content div:first").fadeIn(); // Выводим содержание

    $('#tabs button').click(function(e) {
        e.preventDefault();
        $("#content div").hide(); //Скрыть все сожержание
        $("#tabs button").attr("id",""); //Сброс ID
        $(this).parent().attr("id","current"); // Активируем закладку
        $('#' + $(this).attr('title')).fadeIn(); // Выводим содержание текущей закладки
    });
});




//styled card block 05

jQuery(function ($) {
    $('.card-05').masonry({
        itemSelector: '.card-item',
        columnWidth: 50,
    });
});
