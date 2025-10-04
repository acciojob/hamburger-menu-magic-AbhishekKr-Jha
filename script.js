//your JS code here. If required.


const hamburger_button  = document.getElementsByClassName('ham')[0]
const hamburger_menu = document.getElementsByClassName('nav-sub')[0]


hamburger_button.addEventListener('click',function(){
    hamburger_menu.classList.toggle('show-hamburger-menu')
})