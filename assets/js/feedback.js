//elements
const formContainerEl = document.querySelector(".feedback-form-container");

const nameEl = document.getElementById("feedback-form-name");
const nameErrorEl = document.getElementById("feedback-form-name-error");

const phoneEl = document.getElementById("feedback-form-phone");
const phoneErrorEl = document.getElementById("feedback-form-phone-error");

const formMessageEl = document.querySelector(".feedback-form-message");
const formMessageTextEl = document.querySelector(".feedback-form-message__text");

const closeBtn = document.getElementById("feedback-close");

const feedbackFormBtn = document.querySelector(".feedback-form__btn");

//on close modal
closeBtn.addEventListener("click", () => {
    document.getElementById("feedback-modal").classList.remove("active");

    //document.body.style.overflow = "auto";

    nameEl.classList.remove("error");
    nameErrorEl.innerText = "";

    phoneEl.classList.remove("error");
    phoneErrorEl.innerText = "";

    feedbackFormBtn.disabled = true;

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

const feedbackSpinner = document.querySelector(".feedback-form__btn-spinner");
const feedbackBtnText = document.querySelector(".feedback-form__btn-text");

const formInputs = document.querySelectorAll(".feedback-form__input");

//on change input
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", validateForm);
}

function validateForm() {
    if (nameEl.value !== "" && phoneEl.value.length > 8) {
        feedbackFormBtn.disabled = false;
    } else {
        feedbackFormBtn.disabled = true;
    }
}

//on submit form
feedbackForm.addEventListener("submit", async function (e) {
    e.preventDefault();

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
    feedbackSpinner.classList.remove("show");
    feedbackBtnText.classList.remove("hide");
    formContainerEl.style.display = "none";

    let textSuccess = "";
    let textError = "";

    if (document.documentElement.lang === "ru") {
        textSuccess = "Спасибо за заявку! \n Ваши данные успешно отправлены";
        textError = "Не получилось отправить заявку. \n Попробуйте еще раз.";
    } else {
        textSuccess = "Thank you for the application! \n Your data has been sent successfully";
        textError = "It was not possible to send the application. \n Try again.";
    }

    if (res.status === 200) {
        formMessageTextEl.innerText = textSuccess;
    } else {
        formMessageTextEl.innerText = textError;
    }

    formMessageEl.style.display = "flex";
});

function sendMail(payload) {
    const api = "https://api.emailjs.com/api/v1.0/email/send";

    var data = {
        service_id: "service_1cwzvc1",
        template_id: "template_snv0pnb",
        user_id: "cRrnrzHf6J14p4n1m",
        template_params: payload,
    };

    return (
        fetch(api, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
            // .then((res) => res.json())
            .then((data) => {
                return data;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    );
}
