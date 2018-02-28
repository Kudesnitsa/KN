jQuery(document).ready(function () {
    jQuery('.slider').slick({
        infinite: true,
        prevArrow: "<button type='button' class='prev'></button>",
        nextArrow:" <button type='button' class='next'></button>",
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });


    jQuery('.select_good.colors').click(function () {
        jQuery('.select_good.colors').toggleClass("decor");

    });


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

        jQuery('.selector_language').appendTo(jQuery('.language'));
        jQuery('.mobil_language').removeClass("active");
        var chosen_language = jQuery('.chosen_language');
        var lang = chosen_language.html();
        chosen_language.html(jQuery(this).html());
        jQuery(this).html(lang);
    });
    jQuery('.mobil_language .selector_language .lang').click(function () {
        jQuery('.selector_language').appendTo(jQuery('.language'));
        jQuery('.mobil_language').removeClass("active");
    });

    jQuery('.selector_language .lang').click(function () {

        jQuery('.selector_language').appendTo(jQuery('.language'));
        jQuery('.mobil_language').removeClass("active");
        var chosen_language = jQuery('.chosen_language');
        var lang = chosen_language.html();
        chosen_language.html(jQuery(this).html());
        jQuery(this).html(lang);
    });
    jQuery('.sub_nav .selector_language .lang').click(function () {
        var chosen_language = jQuery('.chosen_language');
        var lang = chosen_language.html();
        chosen_language.html(jQuery(this).html());
        jQuery(this).html(lang);
    });

    jQuery('.language .selector_language .lang').click(function () {
        jQuery('.language').toggleClass("decor_language");
        jQuery('.sub_nav .selector_language').toggle();
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

    function toggle_select(toggle, toggleclass) {
        jQuery(toggle).toggle();
        jQuery(toggleclass).toggleClass('decor_select');

    }

    jQuery('.chosen_prise').on('click', function () {
        toggle_select('.selector_prise', '.select .prise');
        jQuery('.chosen_prise .chosen').html('<u>по ценах</u>');
    });

    jQuery('.selector_prise .item').on('click', function () {
        toggle_select('.selector_prise', '.select .prise');
        jQuery('.chosen_prise .chosen').html(jQuery(this).html());
    });
    jQuery('.chosen_silhouette').on('click', function () {
        toggle_select('.selector_silhouette', '.silhouette');
        jQuery('.chosen_silhouette  .chosen').html('<u>по силуэту</u>');
    });

    jQuery('.selector_silhouette .item').on('click', function () {
        toggle_select('.selector_silhouette', '.silhouette');
        jQuery('.chosen_silhouette .chosen').html(jQuery(this).html());

    });
    jQuery('.sub_nav .chosen_language').click(function () {
        jQuery('.language').toggleClass("decor_language");
        jQuery('.selector_language').toggle();
    });
    jQuery('.see_more_category').on('click', function () {
        jQuery('.description').toggleClass('small_text');


    });
    jQuery('.sort_prise').on('click', function () {
        jQuery('path').toggleClass("active");


    });
    photo_resize();
});

jQuery(window).resize(function () {
    photo_resize()
});


function photo_resize() {
    var arr = jQuery('.exhibition_img img');
    var height = [];
    arr.each(function (ix, el) {
        height[ix] = jQuery(el).height();
    });
    var min_of_array = Math.min.apply(Math, height);
    jQuery('.exhibition_img').height(min_of_array);
}