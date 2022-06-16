// function show(any) {
//     document.querySelector(".dropdown__input").value = any;
// }
// let dropdown = document.querySelector(".dropdown");
// let dropdownOptions = document.querySelector(".dropdown__options");
// dropdown.onclick = function () {
//     dropdown.classList.toggle("active");
//     dropdownOptions.classList.toggle("active");
// };

// let dropdown = document.querySelector('.dropdown');
// let dropdownOptions = document.querySelector(".dropdown__options");
// window.addEventListener('click', function(e){
//     if (dropdown.contains(e.target)){
//         dropdown.classList.toggle('active');
//         dropdownOptions.classList.toggle("active");   
//     } else {
//         if (dropdown. classList.contains('active')){
//             dropdown.classList.remove('active');
//             dropdownOptions.classList.remove('active');
//         }
//     }
// })
//let intervalId;



// document.querySelectorAll('.dropdown').forEach(e => {
//     e.addEventListener('click', e => {
//         const menu = e.currentTarget.dataset.path;
//         document.querySelectorAll('.dropdown__options').forEach(e => {
//             let dropdownOptions = document.querySelector(`[data-target=${menu}]`)
//             if (!dropdownOptions.classList.contains('active')) {
//                 e.classList.remove('active');
//                 //document.querySelector(`[data-target=${menu}]`).classList.add('active');
//                 intervalId = setTimeout(() => {
//                     document.querySelector(`[data-target=${menu}]`).classList.add('active');
//                 }, 0);
//             }

//             if (dropdownOptions.classList.contains('active')) {
//                 clearTimeout(intervalId);
//                 //document.querySelector(`[data-target=${menu}]`).classList.remove('active');
//                 intervalId = setTimeout(() => {
//                     document.querySelector(`[data-target=${menu}]`).classList.remove('active');
//                 }, 0);
//             }

//             window.onclick = e => {
//                 if (e.target == dropdownOptions || e.target == document.querySelector(`[data-path=${menu}]`)) {
//                     return;
//                 } else {
//                     document.querySelector(`[data-target=${menu}]`).classList.remove('active');
//                 }
//             }
//         });
//     });
// });

// function filter(value) {
//     console.log(value);
//     {% for project in site.projects %}
//       const cat = {{ project }}
//       console.log(cat);
//     {% endfor %}
// }

// document.querySelectorAll('.dropdown__options-item').forEach(e => {
//     e.addEventListener('click', e => {
//         document.querySelector(".dropdown__input").value = e.currentTarget.innerText;
//         filter(e.currentTarget.getAttribute("data-target"));
//     })
// });

// const pathArray = window.location.pathname.split('/');
// console.log(pathArray);
// document.querySelector(".dropdown__input").value = "Цифровизация бизнесс-процессов";