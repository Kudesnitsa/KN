jQuery(document).ready(function () {
    jQuery('.show_menu').click(function () {
        jQuery('.black_fond').toggle();
        jQuery('.mobil_menu').toggleClass("active");

    });


    jQuery('.mobil_menu .have_sub_menu a').click(function () {
        !jQuery('.mobil_category').hasClass("active") ? jQuery('.mobil_category').addClass("active") : console.log('error');
    });


    jQuery('.mobil_menu .chosen_language').click(function () {
        jQuery('.selector_language').appendTo(jQuery('.mobil_language'));
        !jQuery('.mobil_category').hasClass("active") ? jQuery('.mobil_language').addClass("active") : console.log('error');

    });


    jQuery('.close').on('click', function () {
        jQuery('.mobil_category').hasClass("active") ? jQuery('.mobil_category').removeClass("active") : jQuery('.mobil_language').removeClass("active");
    });


    jQuery('.selector_categorys .category').click(function () {
        jQuery('.mobil_category').removeClass("active");
        jQuery('.black_fond').toggle();
        jQuery('.mobil_menu').removeClass("active");
    });

    jQuery('.black_fond').click(function () {
        jQuery('.black_fond').toggle();
        jQuery('.mobil_menu').removeClass("active");
        jQuery('.mobil_language').removeClass("active");
        jQuery('.mobil_category').removeClass("active");
    });

    jQuery('.selector_language .lang').click(function () {
        jQuery('.language').toggleClass("decor_language");
        var chosen_language = jQuery('.chosen_language');
        var lang = chosen_language.html();
        chosen_language.html(jQuery(this).html());
        jQuery(this).html(lang);
        jQuery('.sub_nav .selector_language').toggle();
        jQuery('.selector_language').appendTo(jQuery('.language'));
        jQuery('.mobil_language').removeClass("active")
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


    jQuery('.sub_nav .chosen_language').click(function () {
        jQuery('.language').toggleClass("decor_language");
        jQuery('.selector_language').toggle();
    });

});

jQuery(window).resize(function () {
    var img_height_1 = jQuery('.exhibition_img_1 img').height();
    var img_height_2 = jQuery('.exhibition_img_2 img').height();
    jQuery('.exhibition_img').height(img_height_1 > img_height_2 ? img_height_2 : img_height_1);
});