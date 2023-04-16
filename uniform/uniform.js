const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

$(".extend").click(function () {
  var parent = $(this).closest(".item-answer-question");
  $(parent).find(".answer").addClass("show");
  $(this).css("display", "none");
  $(parent).find(".close").css("display", "block");
});
$(".close").click(function () {
  var parent = $(this).closest(".item-answer-question");
  $(parent).find(".answer").removeClass("show");
  $(this).css("display", "none");
  $(parent).find(".extend").css("display", "block");
});
