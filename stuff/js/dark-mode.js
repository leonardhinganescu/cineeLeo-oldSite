const darkBtn = document.querySelector(".dark_mode_btn");
const bodyelem = document.body;
const navelem = document.querySelector("#nav");
const quoteEl = document.querySelector(".dream-container");
const theFooter = document.querySelector("footer");
const scrollBtn = document.querySelector(".scrollUpBtn");

darkBtn.addEventListener("click", makeDark);

function makeDark(e) {
    bodyelem.classList.toggle("dark_mode_body");
    darkBtn.classList.toggle("light_mode_btn");
    navelem.classList.toggle("dark_mode_nav");

    if (darkBtn.classList.contains("light_mode_btn")) {
        darkBtn.innerHTML = "light mode";
    }
    else {
        darkBtn.innerHTML = "dark mode";
    }
    quoteEl.classList.toggle("dark-mode-quote");
    theFooter.classList.toggle("dark-mode-footer");
    scrollBtn.classList.toggle("dark-mode-scrollUpBtn");
}
