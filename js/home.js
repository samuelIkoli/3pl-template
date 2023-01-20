const banner_text = document.querySelector('#banner_text');
const banner_head = document.querySelector('#banner_head');
const mainHome = document.querySelector('#mainHome');
const page = document.querySelector('#page');
const cover = document.querySelector('#cover');
const landingBtn = document.querySelector("#landingBtn");
landingBtn.addEventListener('click', () => {
    mainHome.classList.remove('hidden');
    page.classList.add('moved');
    setTimeout(() => {
        page.classList.remove('moved');
        cover.classList.add('hidden');
    }, 2100);
});

function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    for (const reveal of reveals) {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add("active");
        } else {
            reveal.classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
setTimeout(() =>
    landingBtn.classList.remove('hidden-slow')
    , 14100);

setTimeout(() =>{
    banner_head.classList.add('text_shadow');
    banner_head.classList.add('bold');
}, 7000);
setTimeout(() =>
    banner_head.classList.remove('hidden-vis')
, 4999);
setTimeout(() =>
    banner_text.classList.add('text_shadow_small')
, 6999);

setTimeout(() =>
banner_text.children[0].classList.remove('hidden-vis')
, 8100);
setTimeout(() =>
banner_text.children[1].classList.remove('hidden-vis')
, 10100);
setTimeout(() =>
banner_text.children[3].classList.remove('hidden-vis')
, 12100);