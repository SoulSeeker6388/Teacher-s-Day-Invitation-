// @ts-nocheck

// ========================================
// PAGE SYSTEM
// ========================================

const pages = document.querySelectorAll(".page");

const navButtons =
    document.querySelectorAll(
        ".nav-links button, [data-page]"
    );

function showPage(pageId) {

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const targetPage =
        document.getElementById(pageId);

    if (targetPage) {
        targetPage.classList.add("active");
    }

    navButtons.forEach(function(button) {

        button.classList.remove("active");

        if (button.dataset.page === pageId) {
            button.classList.add("active");
        }

    });

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ========================================
// NAVIGATION BUTTONS
// ========================================

navButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        showPage(button.dataset.page);

    });

});


// ========================================
// ELEGANT SURPRISE
// ========================================

const surpriseBtn =
    document.getElementById("surpriseBtn");

const finalMessage =
    document.getElementById("finalMessage");

if (surpriseBtn) {

    surpriseBtn.addEventListener("click", function() {

        if (finalMessage) {
            finalMessage.classList.add("show");
        }

        surpriseBtn.innerHTML =
            "✨ Surprise Revealed!";

        surpriseBtn.disabled = true;

        createConfetti();

        // 🎈 BALLOONS
        createBalloons();

        if (navigator.vibrate) {
            navigator.vibrate([100, 50, 100]);
        }

    });

}


// ========================================
// ELEGANT CELEBRATION
// ========================================

function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const elements = [
        "✨",
        "✦",
        "🌸",
        "✧",
        "🎀"
    ];

    for (let i = 0; i < 45; i++) {

        const piece =
            document.createElement("span");

        piece.classList.add("confetti-piece");

        piece.textContent =
            elements[
                Math.floor(
                    Math.random() * elements.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.top =
            (70 + Math.random() * 30) + "vh";

        piece.style.fontSize =
            (14 + Math.random() * 20) + "px";

        piece.style.animationDuration =
            (5 + Math.random() * 5) + "s";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.opacity =
            0.65 + Math.random() * 0.35;

        container.appendChild(piece);
    }

    setTimeout(function() {

        container.innerHTML = "";

    }, 11000);
}


// ========================================
// 🎈 FLYING BALLOONS
// ========================================

function createBalloons() {

    const balloonContainer =
        document.createElement("div");

    balloonContainer.id =
        "flying-balloons";

    balloonContainer.style.position =
        "fixed";

    balloonContainer.style.left = "0";
    balloonContainer.style.top = "0";
    balloonContainer.style.width = "100%";
    balloonContainer.style.height = "100%";

    balloonContainer.style.pointerEvents =
        "none";

    balloonContainer.style.overflow =
        "hidden";

    balloonContainer.style.zIndex =
        "99999";

    document.body.appendChild(
        balloonContainer
    );


    const balloonColors = [
        "🎈",
        "🎈",
        "🎈",
        "🎈",
        "🎈"
    ];


    for (let i = 0; i < 18; i++) {

        const balloon =
            document.createElement("div");

        balloon.textContent =
            balloonColors[
                Math.floor(
                    Math.random() *
                    balloonColors.length
                )
            ];

        balloon.style.position =
            "absolute";

        balloon.style.left =
            (Math.random() * 100) + "%";

        balloon.style.top =
            "110%";

        balloon.style.fontSize =
            (35 + Math.random() * 30) + "px";

        balloon.style.opacity =
            "0";

        balloon.style.filter =
            "drop-shadow(0 5px 7px rgba(0,0,0,0.15))";


        balloonContainer.appendChild(
            balloon
        );


        const duration =
            4500 + Math.random() * 3000;

        const delay =
            i * 120;

        const drift =
            (Math.random() - 0.5) * 180;


        balloon.animate(

            [
                {
                    transform:
                        "translate(0, 0) rotate(0deg)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(" +
                        (drift * 0.3) +
                        "px, -30vh) rotate(8deg)",
                    opacity: 1,
                    offset: 0.15
                },

                {
                    transform:
                        "translate(" +
                        drift +
                        "px, -130vh) rotate(-8deg)",
                    opacity: 1,
                    offset: 0.85
                },

                {
                    transform:
                        "translate(" +
                        (drift * 1.2) +
                        "px, -150vh) rotate(12deg)",
                    opacity: 0
                }
            ],

            {
                duration: duration,
                delay: delay,
                easing: "ease-out",
                fill: "forwards"
            }

        );

    }


    setTimeout(function() {

        if (balloonContainer) {
            balloonContainer.remove();
        }

    }, 9000);

}


// ========================================
// BACKGROUND MUSIC
// ========================================

const music =
    document.getElementById("bgMusic");

const musicBtn =
    document.getElementById("musicBtn");

let musicPlaying = false;

if (musicBtn && music) {

    musicBtn.addEventListener("click", function() {

        if (!musicPlaying) {

            music.play()
                .then(function() {

                    musicPlaying = true;

                    musicBtn.innerHTML =
                        "🔊 Music On";

                })
                .catch(function() {

                    musicBtn.innerHTML =
                        "🎵 Tap Again";

                });

        } else {

            music.pause();

            musicPlaying = false;

            musicBtn.innerHTML =
                "🎵 Music Off";

        }

    });

}


// ========================================
// PAGE ANIMATION
// ========================================

pages.forEach(function(page) {

    page.addEventListener(
        "animationend",
        function() {

            page.style.animation = "";

        }
    );

});


// ========================================
// INITIAL PAGE
// ========================================

if (pages.length > 0) {

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    const homePage =
        document.getElementById("home");

    if (homePage) {
        homePage.classList.add("active");
    }
}


// ========================================
// CURRENT YEAR
// ========================================

const yearElements =
    document.querySelectorAll(".current-year");

yearElements.forEach(function(element) {

    element.textContent =
        new Date().getFullYear();

});


// ========================================
// CONSOLE
// ========================================

console.log(
    "🌸 Teachers' Day Website loaded successfully!"
);
