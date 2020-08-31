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
  window.scrollTo(0, 0);
}

//    LOGIN

const users = ["LiviaCarasel", "AnaRasanu"];
const passwords = ["8U93UsDu", "m6V29kIj"];
const name = ["Hi Livia C&#259;r&#259;&#351;el!", "Hi Ana R&#259;&#351;anu!"];
const links = [
  "https://drive.google.com/uc?export=download&id=1z38D10-UPvAgUltXTfT_b3LdrElnJ4Ks",
  "https://drive.google.com/uc?export=download&id=1985RbRO8RJG9uNTemcAHrsFlfO6Tf2Wr",
];

const loginBtn = document.querySelector("#loginbtn");
const theForm = document.querySelector(".form");
const title = document.querySelector(".downloadTitle");

if (loginBtn) {
  loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    const user = document.querySelector("#username").value;
    const pass = document.querySelector("#password").value;

    let credentialsOK = false;
    let index;

    users.forEach(function (curent_user, i) {
      if (curent_user === user && pass === passwords[i]) {
        credentialsOK = true;
        index = i;
      }
    });

    if (credentialsOK) {
      theForm.style.opacity = "0";

      const gridDiv = document.querySelectorAll(".grid")[1];
      setTimeout(function () {
        gridDiv.removeChild(gridDiv.childNodes[1]);
      }, 1000);

      console.log(gridDiv);

      const bigDiv = document.createElement("div");
      bigDiv.classList.add("column-xs-12");
      bigDiv.classList.add("downloadTab");

      const centerDiv = document.createElement("div");
      centerDiv.classList.add("centered");

      const title = document.createElement("h3");
      title.classList.add("downloadTitle");
      title.innerHTML = name[index];
      centerDiv.appendChild(title);

      const dwnLink = document.createElement("a");
      dwnLink.setAttribute("href", links[index]);
      dwnLink.setAttribute("download", users[index]);
      dwnLink.setAttribute("target", "_blank");
      dwnLink.classList.add("buton");
      dwnLink.classList.add("downloadBtn");
      dwnLink.innerText = "Download your photos from here";
      centerDiv.appendChild(dwnLink);

      bigDiv.appendChild(centerDiv);
      gridDiv.appendChild(bigDiv);

      setTimeout(function () {
        bigDiv.style.opacity = "1";
        bigDiv.style.padding = "5rem 0 0 0";
      }, 1300);
    }
  });
}
