//modal 1
var modal_button_1 = document.getElementById("modal-button-1");
var modal1 = new bootstrap.Modal(document.getElementById("modal1"), {
  keyboard: false,
});
modal_button_1.addEventListener("click", function () {
  modal1.toggle();
});
//modal 2
var modal_button_2 = document.getElementById("modal-button-2");
var modal2 = new bootstrap.Modal(document.getElementById("modal2"), {
  keyboard: false,
});
modal_button_2.addEventListener("click", function () {
  modal2.toggle();
});
