const formInput = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// 1. Умова - прослуховувач input записує в локальне сховище
// об'єкт з даними з форми

formInput.addEventListener("input", (event) => {
    const userEmail = formInput.email.value.trim();
    const userMessage = formInput.message.value.trim();
    const fillForm = {
        email: userEmail,
        message: userMessage,
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(fillForm));
})

// 2. Умова - при перезавантаженні сторінки беруться дані 
// з локального сховища і відтворюються в полях форми, якщо
// локальне сховище порожнє - форма порожня

const savedData = localStorage.getItem(STORAGE_KEY);
if (savedData) {
    const parseData = JSON.parse(savedData);
    formInput.email.value = parseData.email || "";
    formInput.message.value = parseData.message || "";
}

// 3. Умова - прослуховувач submit виводить в консоль
// об'єкт з даними з локального сховища, і обнуляє його.
// Форма також обнуляється

formInput.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!formInput.email.value.trim() ||
        !formInput.message.value.trim()) {
        alert("Всі поля повинні бути заповнені");
        return;
    }
    console.table(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    formInput.reset();
})