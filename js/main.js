let navbar = document.getElementById("navbar-outer")
let header = document.getElementById("header")
function navMove(){
    if (window.scrollY>=header.offsetHeight){
        navbar.classList.add("navbar-moven")
        navbar.classList.remove("navbar-untouched")
        navbar.classList.remove("navbar-outer")
    } else {
        navbar.classList.remove("navbar-moven")
        navbar.classList.add("navbar-untouched")
        navbar.classList.add("navbar-outer")

    }
}
window.addEventListener("scroll", navMove)