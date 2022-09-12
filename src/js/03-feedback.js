import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector(`.feedback-form`),
    textarea: document.querySelector(`.feedback-form textarea`),
    input: document.querySelector(`.feedback-form input`),
};

refs.form.addEventListener(`submit`, onFormSubmit);
// refs.form.addEventListener(`input`, (onTextareaInput, 500));
refs.form.addEventListener(`input`, throttle(e => {
    formData[e.target.name] = e.target.value;
    console.log(formData);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500)
);

const STORAGE_KEY = "feedback-form-state";
populateMessageOutput();
let formData = {};

function onFormSubmit(evt) {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);
};


 
function populateMessageOutput() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
    const formData = JSON.parse(saveMessage);
    if (saveMessage) {
        // console.log(saveMessage);
        refs.textarea.value = formData.message || '';
        refs.input.value = formData.email || '';
    }
};
