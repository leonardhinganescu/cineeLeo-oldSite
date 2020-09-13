const users = ["LiviaCarasel", "AnaRasanu", "EugenToma", "RuxandraFilimon"];
const passwords = ["8U93UsDu", "m6V29kIj", "tW6pCy6p", "dmNM9L6l"];
const name = ["hi Livia C&#259;r&#259;&#351;el", "hi Ana R&#259;&#351;anu", "hi Eugen Toma", "hi Ruxandra Filimon"];
const links = [
  "https://matix.li/4a36297afa27",
  "https://matix.li/23511ddd71c1",
  "https://matix.li/dc0056408cad",
  "https://matix.li/02b18fe08173"
];

const loginBtn = document.querySelector("#loginbtn");
const theForm = document.querySelector(".form");
const title = document.querySelector(".downloadTitle");

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
