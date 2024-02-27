const STORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');

function readFormDate(form) {
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    return {
        email,
        message,
    }
}

form.addEventListener('input', (event) => {
    event.preventDefault();
    const date = readFormDate(event.currentTarget);
    const jsonDate = JSON.stringify(date);
    localStorage.setItem(STORAGE_KEY, jsonDate);
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const rowDate = localStorage.getItem(STORAGE_KEY);
    const date = JSON.parse(rowDate);
    if(date.email && date.message) {
        console.log(date);
        localStorage.removeItem(STORAGE_KEY);
        form.reset();
    } else {
        alert('Аll form fields must be filled out!')
    }
})

const rowDate = localStorage.getItem(STORAGE_KEY);
if (rowDate) {
    const date = JSON.parse(rowDate);
    form.email.value = date.email;
    form.message.value = date.message;
}