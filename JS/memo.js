const memoForm = document.querySelector(".memobox form");
const memoTextBox = memoForm.querySelector('textarea');
const memoSaveBtn = memoForm.querySelector('input');

function memoSave() {
    localStorage.setItem("memo", memoTextBox.value);
}

function memoSubmit(event) {
    event.preventDefault();
    memoSave();
}

memoForm.addEventListener("submit", memoSubmit);
memoForm.addEventListener("focusout", memoSubmit);
memoTextBox.value = localStorage.getItem("memo");