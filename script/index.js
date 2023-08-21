// gradient removal

const grad = document.querySelector("#grad");
const hide = document.querySelector("#hide");

hide.addEventListener("click", hideFn);

function hideFn() {
  grad.style.display = "none";
  hide.style.display = "none";
  hide.removeEventListener("click", hideFn);
}

// navbar

const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
