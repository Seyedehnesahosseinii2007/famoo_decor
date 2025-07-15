const vaseelement = document.getElementsByClassName("menu1");
const menuBTN = document.querySelector('.menu-btn') as HTMLElement | null;
const menu = document.querySelector('.menu') as HTMLElement | null;
// for humburger menu close and open 
if (menuBTN && menu) {
    menuBTN.addEventListener('click', () => {
        menuBTN.classList.toggle('open');
        menu.classList.toggle('open');
    });
}
document.onclick = (event) => {
    if (menu && menuBTN && !menu.contains(event.target as Node) && !menuBTN.contains(event.target as Node)) {
        menuBTN.classList.remove('open');
        menu.classList.remove('open');
    }
};