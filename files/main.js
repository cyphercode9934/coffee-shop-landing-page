//Go to top button
window.addEventListener('scroll', scrollFunction)

function scrollFunction(){
    const goTopBtn = document.querySelector('.go_top')
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        goTopBtn.style.display = "block"
    }
    else{
        goTopBtn.style.display = "none"
    }
}

//Sidebar
function topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}

function showSidebar(){
    const sidebar = document.querySelector('.sidebar_container')
    sidebar.classList.add('sidebar_active')
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar_container')
    sidebar.classList.remove('sidebar_active')
}

//Navbar scrolling
let lastScrollTop = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const navbar = document.querySelector(".nav_container")
    if(currentScroll > lastScrollTop){
        navbar.classList.add('nav_hidden')
    }
    else{
        navbar.classList.remove('nav_hidden')
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});



// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

// const sidebarOpen = document.querySelector(".hamburger")
// const sidebarClose = document.querySelector(".sidebar_x")

// sidebarOpen.addEventListener("click", () => {
//     const sidebar = document.querySelector(".sidebar_container")
//     sidebar.classList.add('sidebar_active')
// })

// sidebarClose.addEventListener("click", () => {
//     const sidebar = document.querySelector(".sidebar_container")
//     sidebar.classList.remove('sidebar_active')
// })