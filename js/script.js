"use strict";
// Create a Prgoress bar
const progBar = document.getElementById("progress-bar");
document.addEventListener("scroll", (e) => {
    let { scrollTop, scrollHeight } = document.documentElement;
    let percentage = (scrollTop / (scrollHeight - window.innerHeight)) * 100;
    progBar.style.width = percentage + "%";
});
// Create a Count-Down clock
let coutToDate = new Date().setMonth(new Date().getMonth() + 1);
let previosDate;
setInterval(() => {
    let currDate = new Date(new Date());
    let diff = Math.floor((coutToDate - +currDate) / 1000);
    if (previosDate === diff)
        return;
    clock(diff);
    previosDate = diff;
}, 250);
function clock(num) {
    let seconds = num % 60;
    let minutes = Math.floor((num / 60) % 60);
    let hours = Math.floor((num / 3600) % 24);
    let days = Math.floor(num / 86400);
    setTime(document.querySelector("[data-days-tens]"), Math.floor(days / 10));
    setTime(document.querySelector("[data-days-ones]"), days % 10);
    setTime(document.querySelector("[data-hours-tens]"), Math.floor(hours / 10));
    setTime(document.querySelector("[data-hours-ones]"), hours % 10);
    setTime(document.querySelector("[data-minutes-tens]"), Math.floor(minutes / 10));
    setTime(document.querySelector("[data-minutes-ones]"), minutes % 10);
    setTime(document.querySelector("[data-seconds-tens]"), Math.floor(seconds / 10));
    setTime(document.querySelector("[data-seconds-ones]"), seconds % 10);
}
function setTime(element, num) {
    element.innerText = `${num}`;
}
// smooth bar-filling animation
const observor = new IntersectionObserver((entires) => {
    entires.forEach((entry) => {
        if (entry.isIntersecting)
            entry.target.classList.add("fill");
    });
}, { rootMargin: "-100px" });
const skills = document.querySelectorAll(".skill span");
skills.forEach((skill) => {
    observor.observe(skill);
});
