var refs={openModalBtn:document.querySelector("[data-modal-open]"),closeModalBtn:document.querySelector("[data-modal-close]"),backdrop:document.querySelector("[data-modal]")};function toggleModal(){document.body.classList.toggle("modal-open"),refs.backdrop.classList.toggle("backdrop--is-hidden")}refs.openModalBtn.addEventListener("click",toggleModal),refs.closeModalBtn.addEventListener("click",toggleModal),refs.backdrop.addEventListener("click",logBackdropClick);
//# sourceMappingURL=index.4a83af4a.js.map
