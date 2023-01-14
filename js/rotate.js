const cards = document.querySelectorAll('.cardRoll');
for (let card of cards) {
    card.addEventListener('click', function () {
        card.style.setProperty(`--position`, `180deg`);
        card.classList.toggle('is-flipped');
    });
}

const tranformCard = () => {
    const tranformCards = document.querySelectorAll(".transformCard");
    for (const tranformCard of tranformCards) {
        const windowHeight = window.innerHeight;
        const elementTop = tranformCard.getBoundingClientRect().top;
        const location = windowHeight - elementTop;

        if (location < 260 && location > -300) {
            let position = -70 + 4 / 15 * location;
            tranformCard.style.setProperty(`--position`, `${position}deg`);
            tranformCard.classList.add("is-flipped");
        } else if (location > 580 && location < 720) {
            tranformCard.style.setProperty(`--position`, `180deg`);
            tranformCard.classList.add("is-flipped");
        } else {

            tranformCard.style.setProperty(`--position`, `0deg`);
            tranformCard.classList.remove("is-flipped");
        }
    }
}
window.addEventListener("scroll", tranformCard);