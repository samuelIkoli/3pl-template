function sideveal() {
    var sideveals = document.querySelectorAll(".sideveal");
    // console.log(sideveals)
    for (var i = 0; i < sideveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = sideveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            sideveals[i].classList.add("active");
        } else {
            sideveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", sideveal);
