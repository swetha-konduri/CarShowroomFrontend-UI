console.log("About Page Loaded Successfully");

// Welcome Message
window.addEventListener("load", () => {
    alert("Welcome To Swetha Luxury Cars 🚗");
});

// Review Cards Hover Effect
const reviewBoxes = document.querySelectorAll(".review-box");

reviewBoxes.forEach(box => {
    box.addEventListener("mouseenter", () => {
        box.style.transform = "scale(1.05)";
    });

    box.addEventListener("mouseleave", () => {
        box.style.transform = "scale(1)";
    });
});

// Counter Animation
const counters = document.querySelectorAll(".stat-box h2");

counters.forEach(counter => {

    const target = parseInt(counter.innerText);

    if (!isNaN(target)) {

        let count = 0;

        const updateCounter = () => {

            count += Math.ceil(target / 50);

            if (count < target) {
                counter.innerText = count + "+";
                setTimeout(updateCounter, 40);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCounter();
    }
});