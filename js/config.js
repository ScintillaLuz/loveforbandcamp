// ------------------------------
// http://twitter.com/mattsince87
// ------------------------------

function scrollNav() {
  $('.menu-page a').click(function(){
    //Toggle Class
    $(".active").removeClass("active");
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  //Scroll to Top
  $('.scrollTop a').scrollTop();
}
scrollNav();