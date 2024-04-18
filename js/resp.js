    navbar=document.querySelector('.navbar');
    navList=document.querySelector('.nav-list');
    rightnav=document.querySelector('.right-nav');

document.querySelector('.burger').addEventListener('click',()=>{
    navList.classList.toggle('v-hidden-resp');
    navbar.classList.toggle('h-nav-resp');
    rightnav.classList.toggle('v-hidden-resp');
})