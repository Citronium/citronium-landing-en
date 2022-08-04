const buttons = document.querySelectorAll(".modal-btn");
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener("click", (e) => {
        document.getElementById("feedback-modal").classList.add("active");
        document.body.style.overflow = "hidden";
        document.body.style.height = "100%";
        document.getElementById("feedback-form").reset()
    });
}

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