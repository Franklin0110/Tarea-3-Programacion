let nav = document.getElementById("nav");
let menu = document.getElementById("enlaces");
let abrir = document.getElementById("open");
let botones = document.getElementById("btn-header");
let cerrado = true;
function menus() {
  let Desplazamiento_Actuar = window.pageYOffset;
  if (Desplazamiento_Actuar <= 300) {
    nav.classList.remove("nav2");
    nav.className = "nav1";
    nav.style.transition = "1s";
  } else {
    nav.classList.remove("nav1");
    nav.className = "nav2";
    nav.style.transition = "1s";
  }
}

window.addEventListener("load", function () {
  $("#onload").fadeOut();
  $("body").removeClass("hidden");
  menus();
});

window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  menus();
});

abrir.addEventListener("click", function () {
  apertura();
});

window.addEventListener("resize", function () {
  if (this.screen.width >= 700) {
    cerrado = true;
    menu.style.removeProperty("overflow");
    menu.style.removeProperty("width");
  }
});

function apertura() {
  if (cerrado) {
    menu.style.width = "70vw";
    cerrado = false;
  } else {
    menu.style.width = "0";
    menu.style.overflow = "hidden";
    cerrado = false;
  }
}
