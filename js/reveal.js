const reveals = document.querySelectorAll(".reveal");
const revealListener = () =>{
    revealFactory(reveals);
}

const sideveals = document.querySelectorAll(".sideveal");
const siderevealListener= () =>{
    revealFactory(sideveals);
}

const leftveals = document.querySelectorAll(".leftveal");
const leftrevealListener= () =>{
    revealFactory(leftveals);
}

const revealFactory = (revealInterface)=> {
    for (const reveal of revealInterface) {
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
window.addEventListener("scroll", revealListener);
window.addEventListener("scroll", siderevealListener);
window.addEventListener("scroll", leftrevealListener);
