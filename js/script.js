$(document).ready(function() {
    $('.head__burger').click(function(event){
        $('.head__burger, .head__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function() {
    $('.facts__list-item-citrus').click(function(event){
        $('.facts__column-coffee, .facts__column-tea, .facts__column-guarana, .facts__column-l, .facts__column-niacin, .facts__column-pepper, .facts__column-b6').removeClass('active');
        $('.facts__list-item-coffee, .facts__list-item-tea, .facts__list-item-guarana, .facts__list-item-l, .facts__list-item-niacin, .facts__list-item-pepper, .facts__list-item-b6').removeClass('active');
        $('.facts__column-citrus').addClass('active');
        $('.facts__list-item-citrus').addClass('active');
    });
});
$(document).ready(function() {
    $('.facts__list-item-coffee').click(function(event){
        $('.facts__column-citrus, .facts__column-tea, .facts__column-guarana, .facts__column-l, .facts__column-niacin, .facts__column-pepper, .facts__column-b6').removeClass('active');
        $('.facts__list-item-citrus, .facts__list-item-tea, .facts__list-item-guarana, .facts__list-item-l, .facts__list-item-niacin, .facts__list-item-pepper, .facts__list-item-b6').removeClass('active');
        $('.facts__column-coffee').addClass('active');
        $('.facts__list-item-coffee').addClass('active');
    });
});
$(document).ready(function() {
    $('.facts__list-item-tea').click(function(event){
        $('.facts__column-citrus, .facts__column-coffee, .facts__column-guarana, .facts__column-l, .facts__column-niacin, .facts__column-pepper, .facts__column-b6').removeClass('active');
        $('.facts__list-item-citrus, .facts__list-item-coffee, .facts__list-item-guarana, .facts__list-item-l, .facts__list-item-niacin, .facts__list-item-pepper, .facts__list-item-b6').removeClass('active');
        $('.facts__column-tea').addClass('active');
        $('.facts__list-item-tea').addClass('active');
    });
});
$(document).ready(function() {
    $('.facts__list-item-guarana').click(function(event){
        $('.facts__column-citrus, .facts__column-coffee, .facts__column-tea, .facts__column-l, .facts__column-niacin, .facts__column-pepper, .facts__column-b6').removeClass('active');
        $('.facts__list-item-citrus, .facts__list-item-coffee, .facts__list-item-tea, .facts__list-item-l, .facts__list-item-niacin, .facts__list-item-pepper, .facts__list-item-b6').removeClass('active');
        $('.facts__column-guarana').addClass('active');
        $('.facts__list-item-guarana').addClass('active');
    });
});
$(document).ready(function() {
    $('.facts__list-item-l').click(function(event){
        $('.facts__column-citrus, .facts__column-coffee, .facts__column-tea, .facts__column-guarana,  .facts__column-niacin, .facts__column-pepper, .facts__column-b6').removeClass('active');
        $('.facts__list-item-citrus, .facts__list-item-coffee, .facts__list-item-tea, .facts__list-item-guarana, .facts__list-item-niacin, .facts__list-item-pepper, .facts__list-item-b6').removeClass('active');
        $('.facts__column-l').addClass('active');
        $('.facts__list-item-l').addClass('active');
    });
});
$(document).ready(function() {
    $('.facts__list-item-niacin').click(function(event){
        $('.facts__column-citrus, .facts__column-coffee, .facts__column-tea, .facts__column-guarana, .facts__column-l, .facts__column-pepper, .facts__column-b6').removeClass('active');
        $('.facts__list-item-citrus, .facts__list-item-coffee, .facts__list-item-tea, .facts__list-item-guarana, .facts__list-item-l, .facts__list-item-pepper, .facts__list-item-b6').removeClass('active');
        $('.facts__column-niacin').addClass('active');
        $('.facts__list-item-niacin').addClass('active');
    });
});
$(document).ready(function() {
    $('.facts__list-item-pepper').click(function(event){
        $('.facts__column-citrus, .facts__column-coffee, .facts__column-tea, .facts__column-guarana, .facts__column-l, .facts__column-niacin, .facts__column-b6').removeClass('active');
        $('.facts__list-item-citrus, .facts__list-item-coffee, .facts__list-item-tea, .facts__list-item-guarana, .facts__list-item-l, .facts__list-item-niacin, .facts__list-item-b6').removeClass('active');
        $('.facts__column-pepper').addClass('active');
        $('.facts__list-item-pepper').addClass('active');
    });
});
$(document).ready(function() {
    $('.facts__list-item-b6').click(function(event){
        $('.facts__column-citrus, .facts__column-coffee, .facts__column-tea, .facts__column-guarana, .facts__column-l, .facts__column-niacin, .facts__column-pepper').removeClass('active');
        $('.facts__list-item-citrus, .facts__list-item-coffee, .facts__list-item-tea, .facts__list-item-guarana, .facts__list-item-l, .facts__list-item-niacin, .facts__list-item-pepper').removeClass('active');
        $('.facts__column-b6').addClass('active');
        $('.facts__list-item-b6').addClass('active');
    });
});
// $('.facts__column-citrus, .facts__column-coffee, .facts__column-tea, .facts__column-guarana, .facts__column-l, .facts__column-niacin, .facts__column-pepper, .facts__column-b6').removeClass('active');
// $('.facts__list-item-citrus, .facts__list-item-coffee, .facts__list-item-tea, .facts__list-item-guarana, .facts__list-item-l, .facts__list-item-niacin, .facts__list-item-pepper, .facts__list-item-b6').removeClass('active');

    $(document).ready(function(){
        $('.results__slider').slick({
            slidesToShow: 1,
            dots: true
        });
    });

    $(document).ready(function(){
        $('.client__slider').slick({
            slidesToShow: 1,
            dots: true
        });
    });