const toggle = document.getElementById("toggle");
const bars = document.getElementById("fa-bars")
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
    menu.classList.toggle("open");
    const barOpen = menu.classList.contains("open");

    bars.classList = barOpen
      ? "fa-solid fa-xmark"
      : "fa-solid fa-bars"
})