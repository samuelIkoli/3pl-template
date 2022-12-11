
const mainHome = document.querySelector('#mainHome');
const page = document.querySelector('#page');
const cover = document.querySelector('#cover');
const landingBtn = document.querySelector("#landingBtn");
landingBtn.addEventListener('click', () => {
    mainHome.classList.remove('hidden');
    page.classList.add('moved');
    setTimeout(() =>
        page.classList.remove('moved')
        , 2100)
    setTimeout(() =>
        cover.classList.add('hidden')
        , 2100);
})

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
    , 6200);