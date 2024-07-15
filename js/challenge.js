"use strict";

document.addEventListener("DOMContentLoaded", () => {
    let playing = true;
    const counter = document.getElementById("counter");
    const minus = document.getElementById("minus");
    const plus = document.getElementById("plus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const commentForm = document.querySelector("form");
    const likesList = document.querySelector(".likes");
    const commentsSection = document.querySelector(".comments");

    const timer = () => setInterval(() => {
        if (playing) {
            counter.innerText = parseInt(counter.innerText) + 1;
        }
    }, 1000);

    let interval = timer();

    const updateCounter = (increment) => {
        counter.innerText = parseInt(counter.innerText) + increment;
    };

    minus.addEventListener("click", () => updateCounter(-1));
    plus.addEventListener("click", () => updateCounter(1));

    heart.addEventListener("click", () => {
        const count = parseInt(counter.innerText);
        let likeItem = likesList.querySelector(`[data-num="${count}"]`);

        if (likeItem) {
            const span = likeItem.querySelector("span");
            span.innerText = parseInt(span.innerText) + 1;
        } else {
            likeItem = document.createElement("li");
            likeItem.setAttribute("data-num", count);
            likeItem.innerHTML = `${count} has been liked <span>1</span> time`;
            likesList.appendChild(likeItem);
        }
    });

    pause.addEventListener("click", () => {
        playing = !playing;
        pause.innerText = playing ? "pause" : "resume";
        const buttons = document.querySelectorAll("button");
        buttons.forEach(button => {
            if (button.id !== "pause") {
                button.disabled = !playing;
            }
        });
    });

    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const input = commentForm.querySelector("input");
        const comment = input.value;
        input.value = "";
        const p = document.createElement("p");
        p.innerText = comment;
        commentsSection.appendChild(p);
    });
});
