$(function () {
  const $toggle = $(".js-humberger-menu");
  const $globalNav = $(".js-global-nav");
  $toggle.on("click", function () {
    if($globalNav.css('display') === 'block') {
      $globalNav.slideUp('1000');
    }else {
      $globalNav.slideDown('1000');
    }
  });
  
});