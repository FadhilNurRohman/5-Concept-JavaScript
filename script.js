const   card = document.querySelectorAll(".concept-card")
const nextbtn = document.querySelector("#next-btn")
const prevbtn = document.querySelector("#prev-btn")

let currentindex = 0 ;

nextbtn.addEventListener("click", () => {
    if (currentindex < card.length - 1) {
        currentindex++;

        card[currentindex].scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    }
});

prevbtn.addEventListener("click", () => {
    if (currentindex > 0) {
        currentindex--;

        card[currentindex].scrollIntoView({
            behavior: "smooth",
            inline: "center",
            block: "nearest"
        });
    }
});


const darkmodebtn = document.querySelector("#dark-mode-btn");

darkmodebtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

