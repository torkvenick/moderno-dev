$(function(){
  
  $('.rate-star').rateYo({
    starWidth: "12px",
    ratedFill: "#ffa726",
    readOnly: true,
    rating: 5
  });

  $('.product-slider__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    dots: true,
    arrows: false
  });
  

  var mixer = mixitup('.products__inner-box');
  

});