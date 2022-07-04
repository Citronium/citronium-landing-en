const feedbackForm = document.getElementById("feedback-form");

const buttons = document.querySelectorAll(".modal-btn");
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener("click", (e) => {
        feedbackForm.classList.add("active");
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
    });
}

const closeBtn = document.getElementById("feedback-close");
closeBtn.addEventListener("click", () => {
    feedbackForm.classList.remove("active");
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
});

const burgerBtn = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");

//open mobile menu
burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
});

//close mobile menu
document.addEventListener("click", (e) => {
    if (e.target !== mobileMenu) {
        mobileMenu.classList.remove("active");
    }
});
