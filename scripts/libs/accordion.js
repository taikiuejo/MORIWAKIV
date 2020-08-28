$(function () {
  const trigger = $(".js-accordion__title");
  const text = $(".js-accordion__body");
  const NotFirstText = $(".js-accordion__body:not(:first)");
  
  NotFirstText.hide();

  trigger.on("click", function () {
    $(this).next(text).slideToggle();
    $(text).not($(this).next(text)).slideUp();
  });
});