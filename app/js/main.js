$(function(){
    $('.top-slider__inner').slick({
        dots: true,
        arrows: false,
        fade: true,
        autoplay: true,
        autoplaySpeed: 2000
    })
});
$(function(){
    $('.filter-category__checkbox').on('click',function(){
        $('.products-content').toggleClass('products-content--list');
    });
    
});


$(function(){
    $('.filter-price__input').ionRangeSlider({
        type: "double",
        onStart: function (data){
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        },
        onChange: function (data){
            $('.filter-price__from').text(data.from);
            $('.filter-price__to').text(data.to);
        }
        
    });
    $('.recent__star').rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    });
    $('.products-content__star').rateYo({
        starWidth: "17px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true
    })

});