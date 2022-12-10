
let mainHome = document.querySelector('#mainHome');
let page = document.querySelector('#page');
let cover = document.querySelector('#cover');
let landingBtn = document.querySelector("#landingBtn");
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
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
