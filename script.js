//your JS code here. If required.


const hamburger_button  = document.getElementsByClassName('hamburger-icon')[0]
const hamburger_menu = document.getElementsByClassName('hamburger-menu')[0]


hamburger_button.addEventListener('click',function(){
    hamburger_menu.classList.toggle('show-hamburger-menu')
})