function onEntry(onentry) {
    onentry.forEach((change) => {
        if (change.isIntersecting) {
            change.target.classList.add("element-show");
        } else {
            change.target.classList.remove("element-show");
        }
    });
}

const options = {
    threhold: [0.5],
};
const observer = new IntersectionObserver(onEntry, options);

const elements = document.querySelectorAll(".when-funeral");

for (let elm of elements) {
    observer.observe(elm);
}
