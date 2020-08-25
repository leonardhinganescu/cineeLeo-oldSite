// Selectors
const copyright = document.querySelector(".copyright");
const expBtn = document.querySelector(".expandable");

// Event Listeners
document.addEventListener("DOMContentLoaded", showDate);
if (expBtn) {
  expBtn.addEventListener("click", expandableSmth);
}

// Functions
$(function () {
  var selectedClass = "";

  $(".actiune").click(function () {
    selectedClass = $(this).attr("value");

    var butoane_filtru = document.getElementsByClassName("actiune");

    var i;
    for (i = 0; i < butoane_filtru.length; i++) {
      butoane_filtru[i].classList.remove("butonactiv");
    }
    this.classList.toggle("butonactiv");

    $("#portfolio").fadeTo(100, 0);

    $("#portfolio div")
      .not("." + selectedClass)
      .delay(200)
      .fadeOut()
      .removeClass("scale-anm");

    setTimeout(function () {
      $("." + selectedClass)
        .fadeIn()
        .addClass("scale-anm");
    }, 100);

    setTimeout(function () {
      $("#portfolio").fadeTo(1000, 1);
    }, 500);
  });
});

function expandableSmth(event) {
  let content = this.nextElementSibling;

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

function showDate(event) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let footerText =
    "&copy " +
    monthNames[new Date().getMonth()] +
    " " +
    new Date().getFullYear();

  footerText += ", cine e Leo?";

  copyright.innerHTML = footerText;
}
