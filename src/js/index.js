// start humburger menu



"use strict";
const vaseelement = document.getElementsByClassName("menu1");
const menuBTN = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
// for humburger menu close and open 
if (menuBTN && menu) {
    menuBTN.addEventListener('click', () => {
        menuBTN.classList.toggle('open');
        menu.classList.toggle('open');
    });
}
document.onclick = (event) => {
    if (menu && menuBTN && !menu.contains(event.target) && !menuBTN.contains(event.target)) {
        menuBTN.classList.remove('open');
        menu.classList.remove('open');
    }
};

// end humburger menu

document.addEventListener('DOMContentLoaded', function () {
    // آرایه تایتل‌ها و بخش‌های محصولات به ترتیب
    const headings = [
        document.querySelector('.the-heading-vas'),
        document.querySelector('.the-candle-holder'),
        document.querySelector('.the-glass'),
        document.querySelector('.the-lamp')
    ];
    const sections = [
        document.querySelector('.horizental-one'),
        document.querySelector('.horizental-two'),
        document.querySelector('.horizental-three'),
        document.querySelector('.horizental-four')
    ];

    // دکمه‌های منو
    const btns = [
        document.querySelector('.menu1 a'),
        document.querySelector('.menu2 a'),
        document.querySelector('.menu3 a'),
        document.querySelector('.menu4 a')
    ];

    function showSection(index) {
        // نمایش فقط تایتل و بخش انتخاب شده
        headings.forEach((head, i) => {
            if (head) head.style.display = (i === index) ? 'block' : 'none';
        });
        sections.forEach((sec, i) => {
            if (sec) {
                if (i === index) {
                    sec.style.display = 'flex';
                    sec.classList.remove('slide-up-animation');
                    void sec.offsetWidth; // ریست انیمیشن
                    sec.classList.add('slide-up-animation');
                } else {
                    sec.style.display = 'none';
                    sec.classList.remove('slide-up-animation');
                }
            }
        });
    }

    // نمایش پیش‌فرض گلدان
    showSection(0);

    // اضافه کردن event به دکمه‌ها
    btns.forEach((btn, i) => {
        if (btn) {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                showSection(i);
            });
        }
    });
});

