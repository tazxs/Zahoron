document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card__right").forEach((cardRight, index) => {
        const slides = cardRight.querySelector(".slides");
        const slide = cardRight.querySelectorAll(".slide");
        const prev = cardRight.querySelector(".prev");
        const next = cardRight.querySelector(".next");
        let currentIndex = 0;

        function showSlide(index) {
            if (index >= slide.length) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = slide.length - 1;
            } else {
                currentIndex = index;
            }
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        prev.addEventListener("click", () => {
            showSlide(currentIndex - 1);
        });

        next.addEventListener("click", () => {
            showSlide(currentIndex + 1);
        });

        showSlide(currentIndex);
    });
});
