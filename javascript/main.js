const nav = document.querySelector("#container_header_nav");
const btnopen = document.querySelector("#container_header_btnopen");
const btnclose = document.querySelector("#container_header_nav_btnclose");

btnopen.addEventListener("click", () => {
    nav.classList.add("visible");
})

btnclose.addEventListener("click", () => {
    nav.classList.remove("visible");
})