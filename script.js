// View My Work Button
const button = document.getElementById("view-work-btn");

button.addEventListener("click", function () {
    document.getElementById("projects").scrollIntoView({
        behavior: "smooth"
    });
});

// Typing Animation
const roles = [
    "Frontend Web Developer",
    "Python Programmer",
    "JavaScript Learner",
    "Future Full-Stack Developer"
];

const typing = document.getElementById("typing");

let index = 0;

typing.textContent = roles[index];

setInterval(function () {

    index++;

    if (index >= roles.length) {
        index = 0;
    }

    typing.textContent = roles[index];

}, 2000);

const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀️";
    }else{
        themeBtn.textContent = "🌙";
    }

});