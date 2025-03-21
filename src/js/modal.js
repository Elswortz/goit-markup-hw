const refs = {
  openModalBtn: document.querySelector("[data-modal-open]"),
  closeModalBtn: document.querySelector("[data-modal-close]"),
  backdrop: document.querySelector("[data-modal]"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  document.body.classList.toggle("modal-open");
  refs.backdrop.classList.toggle('backdrop--is-hidden');
}
