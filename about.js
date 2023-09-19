// ------------------------ menu --------------------------------

let menuIcon = document.querySelector('.menu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('active'); // Toggle the active class on the menu icon

    if (menuIcon.classList.contains('active')) {
        menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Replace menu icon with cross icon
    } else {
        menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Replace cross icon with menu icon
    }

    navbar.classList.toggle('active'); // Toggle the active class on the navbar
});


// By Datta kale 


// document.addEventListener("DOMContentLoaded", function () {
//     const menuIcon = document.querySelector(".menu i");
//     const cross = document.querySelector(".cross i");
//     const ho1 = document.querySelector("#ho1"); // Updated to match the CSS id

//     menuIcon.addEventListener("click", function () {
//         if (ho1.style.display === "block") {
//             ho1.style.display = "none";
//             menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Change to menu icon
//         } else {
//             ho1.style.display = "block";
//             menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Change to cross icon
//         }
//     });

//     cross.addEventListener("click", function () {
//         ho1.style.display = "none";
//         menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Change to menu icon
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu i");
    const cross = document.querySelector(".cross i");
    let ho1 = document.querySelector("#ho1"); // Select the element to toggle

    menuIcon.addEventListener("click", function () {
        console.log("Menu icon clicked");
        ho1.style.display = "block"; // Display the element when menu icon is clicked
    });

    cross.addEventListener("click", function () {
        ho1.style.display = "none"; // Hide the element when cross icon is clicked
    });
});


