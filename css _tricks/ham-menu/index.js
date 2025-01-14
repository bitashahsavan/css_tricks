const HamMenu=document.querySelector(".ham-menu");

const offScreenMenu=document.querySelector(".off-screen-menu");
HamMenu.addEventListener( "click" , ()=>{

    HamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})