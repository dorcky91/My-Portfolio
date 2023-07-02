let navbarNav = document.querySelector("#navbarNav");
let navLinks = document.querySelectorAll("#navbarNav .nav-link:not(#btn-mode)");
let sections = document.querySelectorAll("section");
let overlay = document.querySelector("#overlay");
let btnAbrirMenu = document.querySelector(".navbar-toggler");
let btnCerrarMenu = document.querySelector("#cerrar-menu");

btnAbrirMenu.addEventListener("click", abrirMenu);
overlay.addEventListener("click", cerrarMenu);
btnCerrarMenu.addEventListener("click", cerrarMenu);

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", cerrarMenu);
});

window.addEventListener("scroll", mostrarLinkActivo);

// function controlarMenu() {
//   const estaVisible = navbarNav.classList.contains("mostrar");
//   console.log(estaVisible);

//   if (estaVisible == false) {
//     navbarNav.classList.add("mostrar");
//     overlay.classList.add("mostrar");
//   } else {
//     navbarNav.classList.remove("mostrar");
//     overlay.classList.remove("mostrar");
//   }
// }

function cerrarMenu() {
  navbarNav.classList.remove("mostrar");
  overlay.classList.remove("mostrar");
}

function abrirMenu() {
  navbarNav.classList.add("mostrar");
  overlay.classList.add("mostrar");
}

function mostrarLinkActivo() {
  const alturaNav = document.querySelector("nav").scrollHeight;
  let idSectionActual;

  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - alturaNav) {
      idSectionActual = section.getAttribute("id");
    }
  });

  navLinks.forEach((navLink) => {
    navLink.classList.remove("active");
    let hrefActual = navLink.getAttribute("href");

    if (hrefActual.includes(idSectionActual)) {
      navLink.classList.add("active");
    }
  });
}

obtenerModo();
function obtenerModo() {
  let btnMode = document.querySelector("#btn-mode");
  let body = document.querySelector("body");
  let modo = localStorage.getItem("modo");

  if (modo == null || modo == "day") {
    btnMode.innerHTML = `<i class="bi bi-brightness-high-fill"></i>`;
    body.classList.remove("noche");
    localStorage.setItem("modo", "day");
  } else {
    btnMode.innerHTML = `<i class="bi bi-moon-stars-fill"></i>`;
    body.classList.add("noche");
    localStorage.setItem("modo", "noche");
  }

  return modo;
}

function changeMode() {
  let modo = obtenerModo();
  if (modo == "day" || modo == null) {
    localStorage.setItem("modo", "noche");
  } else {
    localStorage.setItem("modo", "day");
  }

  obtenerModo();
}

// let body = document.querySelector("body"),
//   themeBtn = document.querySelector("#themeBtn");

// themeBtn.addEventListener("click", function () {
//   let modo = body.classList.contains("noche");
//   body.classList.toggle("noche");
// });
