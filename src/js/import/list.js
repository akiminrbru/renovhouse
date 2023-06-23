let acc = document.getElementsByClassName("help__card");

for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        let answer = this.lastElementChild;
        let arrow = this.firstElementChild.lastElementChild;

        arrow.classList.toggle('help__activeArrow')

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
}
