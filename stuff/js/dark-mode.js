const darkBtn = document.querySelector(".dark_mode_btn");
const bodyelem = document.body;
const navelem = document.querySelector("#nav");

darkBtn.addEventListener("click", makeDark);

function makeDark(e) {
    bodyelem.classList.toggle("dark_mode_body");
    darkBtn.classList.toggle("light_mode_btn");
    navelem.classList.toggle("dark_mode_nav");
}
