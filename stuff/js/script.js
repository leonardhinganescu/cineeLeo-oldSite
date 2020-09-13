//    create footer text
const copyright = document.querySelector(".copyright");
document.addEventListener("DOMContentLoaded", showDate);

function showDate(event) {
  const monthNames = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december",
  ];
  let footerText = "&copy " + monthNames[new Date().getMonth()] + " " + new Date().getFullYear();

  footerText += ", cine e Leo?";

  copyright.innerHTML = footerText;
}