//elements
const formContainerEl = document.querySelector(".feedback-form-container");

const nameEl = document.getElementById("feedback-form-name");
const nameErrorEl = document.getElementById("feedback-form-name-error");

const phoneEl = document.getElementById("feedback-form-phone");
const phoneErrorEl = document.getElementById("feedback-form-phone-error");

const formMessageEl = document.querySelector(".feedback-form-message");
const formMessageTextEl = document.querySelector(".feedback-form-message__text");

const closeBtn = document.getElementById("feedback-close");

//on close modal
closeBtn.addEventListener("click", () => {
    document.getElementById("feedback-modal").classList.remove("active");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";

    formContainerEl.style.display = "block";
    formMessageEl.style.display = "none";

    nameEl.classList.remove("error");
    nameErrorEl.innerText = "";

    phoneEl.classList.remove("error");
    phoneErrorEl.innerText = "";
});

const feedbackForm = document.getElementById("feedback-form");

//on submit form
feedbackForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    let isFormError;

    if (nameEl.value.length === 0) {
        nameEl.classList.add("error");
        nameErrorEl.innerText = "Введите имя";
        isFormError = true;
    } else {
        nameEl.classList.remove("error");
        nameErrorEl.innerText = "";
    }

    if (phoneEl.value.length === 0) {
        phoneEl.classList.add("error");
        phoneErrorEl.innerText = "Введите номер телефона";
        isFormError = true;
    } else {
        phoneEl.classList.remove("error");
        phoneErrorEl.innerText = "";
    }
    if (isFormError) {
        return;
    }

    const payload = {
        name: nameEl.value,
        phone: phoneEl.value,
    };

    const res = await sendMail(payload);

    formContainerEl.style.display = "none";

    if (res.success) {
        formMessageTextEl.innerText = "Спасибо за заявку! \n Ваши данные успешно отправлены";
    } else {
        formMessageTextEl.innerText = "Не получилось отправить заявку. \n Попробуйте еще раз.";
    }

    formMessageEl.style.display = "flex";
});

function sendMail(payload) {
    const api = "https://citronium-landing-api.psrv5.citronium.com/users/send-email";

    return fetch(api, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            return data;
        })
        .catch((error) => {
            return error;
        });
}