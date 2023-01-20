const cards = document.querySelectorAll('.cardRoll');
const addCard = (card) =>{
    card.addEventListener('click', ()=> {
        card.style.setProperty(`--position`, `180deg`);
        card.classList.toggle('is-flipped');
    });
};
for (let card of cards) {
    addCard(card);
}

const tranformCard = () => {
    const tranformCards = document.querySelectorAll(".transformCard");
    for (const tranformCard of tranformCards) {
        const windowHeight = window.innerHeight;
        const elementTop = tranformCard.getBoundingClientRect().top;
        const location = windowHeight - elementTop;

        if (location < 260 && location > -300) {
            const position = -70 + 4 / 15 * location;
            tranformCard.style.setProperty(`--position`, `${position}deg`);
            tranformCard.classList.add("is-flipped");
        } else if (location > 580 && location < 1000) {
            tranformCard.style.setProperty(`--position`, `180deg`);
            tranformCard.classList.add("is-flipped");
        } else if ([...tranformCard.classList].length>2){
            tranformCard.style.setProperty(`--position`, `0deg`);
            tranformCard.classList.remove("is-flipped");
        }
    }
};
window.addEventListener("scroll", tranformCard);
