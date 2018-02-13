
jQuery(document).ready(function(){

    var img_height_1=jQuery('.exhibition_img_1 img').height();
    var img_height_2=jQuery('.exhibition_img_2 img').height();
    var min_height=0;
    jQuery('.exhibition_img').height(img_height_1>img_height_2?img_height_2:img_height_1);
    jQuery('.chosen_language').click(function () {
        jQuery('.language').toggleClass("decor_language");
        jQuery('.selector_language').toggle();



    });
    jQuery('.selector_language .lang').click(function () {
       jQuery('.language').toggleClass("decor_language") ;
        var chosen_language =jQuery('.chosen_language');
        var lang=chosen_language.html();
        chosen_language.html(jQuery(this).html());
        jQuery(this).html(lang);

        jQuery('.selector_language').toggle();

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

jQuery(window).resize(function(){
    var img_height_1=jQuery('.exhibition_img_1 img').height();
    var img_height_2=jQuery('.exhibition_img_2 img').height();
    var min_height=0;
    jQuery('.exhibition_img').height(img_height_1>img_height_2?img_height_2:img_height_1);
});