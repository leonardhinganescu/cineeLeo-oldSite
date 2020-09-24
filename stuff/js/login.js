const loginBtn = document.querySelector("#loginbtn");
const theForm = document.querySelector(".form");
const title = document.querySelector(".downloadTitle");
const gridDiv = document.querySelectorAll(".grid")[1];

loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const user = document.querySelector("#username").value;
  const pass = document.querySelector("#password").value;

  let credentialsOK = false;
  let index;

  accounts.forEach(function (curent_user, i) {
    if (curent_user.user === user && curent_user.pass === pass) {
      credentialsOK = true;
      index = i;
    }
  });

  if (credentialsOK) {
    theForm.style.opacity = "0";

    setTimeout(function () {
      gridDiv.removeChild(gridDiv.childNodes[1]);
    }, 1000);

    const bigDiv = document.createElement("div");
    bigDiv.classList.add("column-xs-12");
    bigDiv.classList.add("downloadTab");

    const centerDiv = document.createElement("div");
    centerDiv.classList.add("centered");

    let insertion;

    if (loginBtn.getAttribute("whatpage") === "download") {
      insertion = downloadPictures(index);

      const title = document.createElement("h3");
      title.classList.add("downloadTitle");
      title.innerHTML = accounts[index].title;
      centerDiv.appendChild(title);
    } else {
      insertion = showMoodboard(index);
    }

    centerDiv.appendChild(insertion);

    bigDiv.appendChild(centerDiv);
    gridDiv.appendChild(bigDiv);

    setTimeout(function () {
      bigDiv.style.opacity = "1";
      if (loginBtn.getAttribute("whatpage") === "download") {
        bigDiv.style.padding = "5rem 0 0 0";
      }
    }, 1300);
  }
});

///       DOWNLOAD PICTURES

function downloadPictures(index) {
  const dwnLink = document.createElement("a");
  dwnLink.setAttribute("href", accounts[index].downLink);
  dwnLink.setAttribute("download", accounts[index].user);
  dwnLink.setAttribute("target", "_blank");
  dwnLink.classList.add("buton");
  dwnLink.classList.add("downloadBtn");
  dwnLink.innerText = "Download your photos from here";

  return dwnLink;
}

///       SHOW MOODBOARD

function showMoodboard(index) {
  const moodboard = document.createElement("iframe");
  moodboard.setAttribute("src", accounts[index].moodLink);
  moodboard.setAttribute("frameborder", "0");
  moodboard.style.width = "100%";
  moodboard.style.height = "70vh";

  return moodboard;
}
