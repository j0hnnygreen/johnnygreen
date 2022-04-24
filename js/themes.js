const toggle = document.getElementById("toggle");
const theme = window.localStorage.getItem("theme");

const light_svg = '<svg style="color: rgb(184, 104, 0);" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>'
const dark_svg = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>'

function svg_changer() {
    if (toggle.innerHTML === light_svg && document.body.classList[0] !== "dark") {
        toggle.innerHTML = dark_svg;
    } else {
        toggle.innerHTML = light_svg;
    }
}

if (theme === "dark") {
    document.body.classList.add("dark");
    toggle.innerHTML = dark_svg;
} else {
    toggle.innerHTML = light_svg;
}

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    } else {
        window.localStorage.setItem("theme", "dark");
    }
});