//open fedback modal
const buttons = document.querySelectorAll(".modal-btn");
for (let i = 0; i < buttons.length; i++) {
    const btn = buttons[i];
    btn.addEventListener("click", (e) => {
        e.stopPropagation();
        document.getElementById("feedback-modal").classList.add("active");
        // document.body.style.overflow = "hidden";
        // document.body.style.height = "100%";

        const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
        const body = document.body;
        body.style.position = "fixed";
        body.style.top = `-${scrollY}`;
        document.getElementById("feedback-form").reset();
    });
}

const burgerBtn = document.getElementById("burger-btn");
const mobileMenu = document.getElementById("mobile-menu");

//open mobile menu
burgerBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    mobileMenu.classList.toggle("active");
    const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
});

//close mobile menu
document.getElementById("mobile-menu__close").addEventListener("click", (e) => {
    console.log("dd");
    e.stopPropagation();
    if (e.target !== mobileMenu) {
        mobileMenu.classList.remove("active");
        const scrollY = document.body.style.top;
        document.body.style.position = "";
        document.body.style.top = "";
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }
});

window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
});
