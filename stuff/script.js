//    SELECTORS
const copyright = document.querySelector(".copyright");
const expBtn = document.querySelector(".expandable");
const scrollUpBtn = document.querySelector(".scrollUpBtn");

//    EVENT LISTENERS
document.addEventListener("DOMContentLoaded", showDate);
if (expBtn) {
  expBtn.addEventListener("click", expandableSmth);
}
if (scrollUpBtn) {
  scrollUpBtn.addEventListener("click", scrollUp);
}

//    FUNCTIONS

//    Filtre
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

//    Expand
function expandableSmth(event) {
  let content = this.nextElementSibling;

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

//    create footer text
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
  let footerText =
    "&copy " +
    monthNames[new Date().getMonth()] +
    " " +
    new Date().getFullYear();

  footerText += ", cine e Leo?";

  copyright.innerHTML = footerText;
}

//    scroll up button
function scrollUp(event) {
  let scrollToTop = window.setInterval(function () {
    let pos = window.pageYOffset;

    if (pos > 0) {
      window.scrollTo(0, pos - 300);
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 4);
}
