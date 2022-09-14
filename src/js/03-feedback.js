import throttle from 'lodash.throttle';
const STORAGE_KEY = "feedback-form-state";

const filterForm = document.querySelector(`.feedback-form`);


saveMessage();

filterForm.addEventListener(`submit`, throttle(evt => {
    evt.preventDefault();
    const formData = new FormData(filterForm);
    formData.forEach((value, name) => console.log(value, name));
    evt.target.reset();
    localStorage.removeItem(STORAGE_KEY);

}, 500)
);

filterForm.addEventListener(`input`, evt => {
    let populateMessageOutput = localStorage.getItem(STORAGE_KEY);
    populateMessageOutput = populateMessageOutput ? JSON.parse(populateMessageOutput) : {};
    populateMessageOutput[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(populateMessageOutput));

});

function saveMessage() {
    let populateMessageOutput = localStorage.getItem(STORAGE_KEY);

    if (populateMessageOutput) {
        populateMessageOutput = JSON.parse(populateMessageOutput);
        Object.entries(populateMessageOutput).forEach(([name, value]) => {
            filterForm.elements[name].value = value;
        });
    }
};


// const refs = {
//     form: document.querySelector(`.feedback-form`),
//     textarea: document.querySelector(`.feedback-form textarea`),
//     input: document.querySelector(`.feedback-form input`),
// };

// refs.form.addEventListener(`submit`, onFormSubmit);
// // refs.form.addEventListener(`input`, (onTextareaInput, 500));
// refs.form.addEventListener(`input`, throttle(e => {
//     formData[e.target.name] = e.target.value;
//     console.log(formData);
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
// }, 500)
// );

// function onFormSubmit(evt) {
//     console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
//     evt.preventDefault();
//     evt.target.reset();
//     localStorage.removeItem(STORAGE_KEY);
// };
// let formData = {};

// function populateMessageOutput() {
//     let saveMessage = localStorage.getItem(STORAGE_KEY);
//     if (saveMessage) {
//         saveMessage = JSON.parse(saveMessage);
//         Object.entries(saveMessage).forEach(([name, value]) => {
//             form.elements[name].value = value;
//         });
//         // console.log(saveMessage);
//         // refs.textarea.value = formData.message || '';
//         // refs.input.value = formData.email || '';
//     }
// };
