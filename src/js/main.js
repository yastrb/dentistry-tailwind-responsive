const navToggle = document.querySelector("#nav-toggle");
const close = document.querySelector("#close");
const menu = document.querySelector("#menu-mobile");

navToggle.addEventListener('click', function(){
    menu.classList.remove("hidden")
    menu.classList.add("fixed");
    console.log("click")
});
close.addEventListener('click', function(){
    menu.classList.remove("fixed")
    menu.classList.add("hidden");
    console.log("click")
});

