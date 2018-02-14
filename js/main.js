jQuery(document).ready(function () {
    jQuery('.mobil_menu .chosen_language').click(function () {
        jQuery('.mobil_language').toggle();
    });
    jQuery('.close').click(function () {
        jQuery('.mobil_language').css("display","none");
        jQuery('.mobil_category').css("display","none");

    });
    jQuery('.mobile .show_menu').click(function () {
        jQuery('.black_fond').toggle();
        jQuery('.mobil_menu').toggle();
    });
    jQuery('.mobil_menu .have_sub_menu').click(function () {
        jQuery('.mobil_category').toggle();
    });



    jQuery('.black_fond').click(function () {
        jQuery('.black_fond').css("display","none");
        jQuery('.mobil_menu').css("display","none");
        jQuery('.mobil_language').css("display","none");
        jQuery('.mobil_category').css("display","none");
    });

    var img_height_1 = jQuery('.exhibition_img_1 img').height();
    var img_height_2 = jQuery('.exhibition_img_2 img').height();
    jQuery('.exhibition_img').height(img_height_1 > img_height_2 ? img_height_2 : img_height_1);
    jQuery('.sub_nav .chosen_language').click(function () {
        jQuery('.language').toggleClass("decor_language");
        jQuery('.selector_language').toggle();



    });
    jQuery('.selector_language .lang').click(function () {
        jQuery('.language').toggleClass("decor_language");
        var chosen_language = jQuery('.chosen_language');
        var lang = chosen_language.html();
        chosen_language.html(jQuery(this).html());
        jQuery(this).html(lang);
        jQuery('.sub_nav .selector_language').toggle();
        jQuery('.mobil_language').css("display","none");

    });

    jQuery('.search').click(function () {

        jQuery('.search').toggleClass("decor_search");
        jQuery('.input_search').toggle();

    });

    jQuery('.output').click(function () {

        jQuery('.persona_office_block').toggle();

    });
    jQuery('.personal_office').click(function () {

        jQuery('.persona_office_block').toggle();

    });



});

jQuery(window).resize(function () {
    var img_height_1 = jQuery('.exhibition_img_1 img').height();
    var img_height_2 = jQuery('.exhibition_img_2 img').height();
    jQuery('.exhibition_img').height(img_height_1 > img_height_2 ? img_height_2 : img_height_1);
});