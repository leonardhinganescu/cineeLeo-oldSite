//    SELECTORS
const expBtn = document.querySelector(".expandable");

//    EVENT LISTENERS
if (expBtn) expBtn.addEventListener("click", expandableSmth);

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


//    scroll up button
const scrollUpBtn = document.querySelector(".scrollUpBtn");

scrollUpBtn.addEventListener("click", scrollUp);

function scrollUp(event) {
  window.scrollTo(0, 0);
}
