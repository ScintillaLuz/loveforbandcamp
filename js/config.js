// ------------------------------
// http://twitter.com/mattsince87
// ------------------------------

$(function() {

  function scrollToAnchor(item) {
    $('html, body').stop().animate({
        scrollTop: $('#' + item).offset().top - 160
    }, 400, function(){
      window.location.hash = item;
    });
    setActiveItem(item);
  }

  function setActiveItem(item) {
    $(".menu-page li").removeClass("active");
    $('[href="#' + item + '"]').closest('li').addClass('active');
  }

  $('.menu-list').on('click', 'a', function(ev) {
    ev.preventDefault();
    var item = $(ev.target).attr('href').replace('#', '');
    scrollToAnchor(item);
  });

  setActiveItem(window.location.hash.replace('#', ''));
});
