//menu mobile Script
const menu = document.querySelector('.menu');
var bxBtnmenu = document.getElementById("bxBtnmenu");

function showMenu() {

    menu.classList.toggle("menu_mobile");
    bxBtnmenu.classList.toggle('bx-x');

}