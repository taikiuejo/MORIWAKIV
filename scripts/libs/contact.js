$(function () {

  // メッセージ文表示
  $('#form').submit(function (event) {
    var formData = $('#form').serialize();
    $.ajax({
      url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeiu2OXn6fYEOh2-9KW-t0mFtIPBiIbBoSD8RRyaRBxqDNmQQ/formResponse",
      data: formData,
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          $(".end-message").slideDown(500);
          $(".form-submit-btn").fadeOut(100);
          //window.location.href = "thanks.html";
        },
        200: function () {
          $(".false-message").slideDown(200);
        }
      }
    });
    event.preventDefault();
  });

  // 全て入力するまで送信できなくする
  const $submitBtn = $('#js-submit')
    $('#form input,#form textarea').on('change', function () {
      if (
        $('#form input[type="text"]').val() !== "" &&
        $('#form input[type="email"]').val() !== "" &&
        $('#form input[type="checkbox"]').val() !== "" &&
        $('#form #privacyCheck').prop('checked') === true
      ) {
        $submitBtn.prop('disabled', false);
  
      } else {
        $submitBtn.prop('disabled', true);
      }
    });
  

});