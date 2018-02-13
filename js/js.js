/**
 * Created by diana on 10.01.2018.
 */
$(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        arrows:false,
        autoplaySpeed:5000

    });
    $('.lang').click(function () {
        $('.selector-lang').toggle();
    });
    $('.selector-lang .lang').click(function () {

        var block_lang =$('.block-lang');
        var lang=block_lang.html();
        block_lang.html($(this).html());
        $(this).html(lang);
        $('.lang').click();

    });

    $('.wedding-dress-nav').mouseenter(function() {
        $('.wedding-dress-show').toggle();
    });

    $('.evening-dress-nav').mouseenter(function() {
        $('.evening-dress-sub-nav').toggle();
    });
    $('.children-dress-nav').mouseenter(function() {
        $('.children-dress-sub-nav').toggle();
    });
    $('.mob-nav').click(function() {
        $('.mob-menu').toggle();
    });

  /* $('.mob-menu').click(function () {
        $('.mob-menu').hide()
    });*/
    $('.mob-entry').click(function () {
        $('.block-mob-entry').toggle();
        $('.menu-items').toggle();
    });
    $('.mob-lang').click(function () {
        $('.change-language').toggle();
        $('.menu-items').toggle();
    });
    $('.change-language .lang').click(function () {
        $('.menu-items .mob-lang').html($(this).html());
        $('.change-language').toggle();
        $('.menu-items').toggle();

    })
});
