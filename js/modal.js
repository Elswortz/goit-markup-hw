const refs = {
  openModalBtn: document.querySelector(".hero-btn"),
  closeModalBtn: document.querySelector(".modal-close"),
  backdrop: document.querySelector(".backdrop"),
};

refs.openModalBtn.addEventListener("click", toggleModal);
refs.closeModalBtn.addEventListener("click", toggleModal);
refs.backdrop.addEventListener("click", logBackdropClick);

function toggleModal() {
  refs.backdrop.classList.toggle("is-hidden");
}
