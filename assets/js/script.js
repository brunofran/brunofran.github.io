const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme(){
    const currentTheme = rootHtml.getAttribute("data-theme");

    if(currentTheme === "dark"){
        rootHtml.setAttribute("data-theme", "light");
    }else{
        rootHtml.setAttribute("data-theme", "dark");
    }
    toggleTheme.classList.toggle("bi-brightness-high-fill");
    toggleTheme.classList.toggle("bi-moon-fill");
}

toggleTheme.addEventListener("click", changeTheme);
