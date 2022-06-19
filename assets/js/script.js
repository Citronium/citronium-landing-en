//const openBtnHero = document.getElementById("open-btn-hero");
const closeBtn = document.getElementById("feedback-close");
const feedbackForm = document.getElementById("feedback-form");

const buttons = document.querySelectorAll('.modal-btn');
for(let i = 0 ; i < buttons.length ; i++) {
  const btn = buttons[i]; 
  btn.addEventListener('click' , (e) => {
    feedbackForm.classList.add('active');
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
  })
}

// if (openBtnHero) {
//     openBtnHero.addEventListener('click', () => {
//         feedbackForm.classList.add('active');
//         document.body.style.overflow = "hidden";
//         document.body.style.height = "100%";
//     })
// }


closeBtn.addEventListener('click', () => {
    feedbackForm.classList.remove('active')
    document.body.style.overflow = "auto";
    document.body.style.height = "auto";
})

