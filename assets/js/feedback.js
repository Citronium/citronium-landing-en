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

    //document.body.style.overflow = "auto";

    nameEl.classList.remove("error");
    nameErrorEl.innerText = "";

    phoneEl.classList.remove("error");
    phoneErrorEl.innerText = "";

    setTimeout(() => {
        formContainerEl.style.display = "block";
        formMessageEl.style.display = "none";
    }, 300);

    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
});

const feedbackForm = document.getElementById("feedback-form");
const feedbackFormBtn = document.querySelector(".feedback-form__btn");

const feedbackSpinner = document.querySelector(".feedback-form__btn-spinner");
const feedbackBtnText = document.querySelector(".feedback-form__btn-text");

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

    feedbackFormBtn.disabled = true;
    feedbackBtnText.classList.add("hide");
    feedbackSpinner.classList.add("show");

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const res = await sendMail(payload);

    feedbackFormBtn.disabled = false;
    feedbackBtnText.classList.remove("hide");
    feedbackSpinner.classList.remove("show");

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
