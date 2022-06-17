const openBtn = document.getElementById("open-btn-hero");
const closeBtn = document.getElementById("feedback-close");
const feedbackForm = document.getElementById("feedback-form");


openBtn.addEventListener('click', () => {
    console.log('dd');
    feedbackForm.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    feedbackForm.classList.remove('active')
})