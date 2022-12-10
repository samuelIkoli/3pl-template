function leftveal() {
    var leftveals = document.querySelectorAll(".leftveal");
    // console.log(leftveals)
    for (var i = 0; i < leftveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = leftveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            leftveals[i].classList.add("active");
        } else {
            leftveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", leftveal);
