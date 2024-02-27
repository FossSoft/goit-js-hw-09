const form = document.querySelector(".feedback-form");
const email = form.elements.email;
const message = form.elements.message;
const localStorageKey = "feedback-form-state";

function getFormState(){
    const storedState = localStorage.getItem(localStorageKey);
    return storedState ? JSON.parse(storedState) : {};
}

function saveFormState(){
    const formState = {email: email.value.trim(), message: message.value.trim()};
    localStorage.setItem(localStorageKey, JSON.stringify(formState));
}

const savedFormState = getFormState();
email.value = savedFormState.email || "";
message.value = savedFormState.message || "";

form.addEventListener('input', (event) => {
    saveFormState();
})

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!email.value.trim() || !message.value.trim()) {
        alert("Будь ласка, заповніть всі поля");
        return;
    }
    console.log({email: email.value.trim(), message: message.value.trim()})
    localStorage.removeItem(localStorageKey);
    form.reset();
})