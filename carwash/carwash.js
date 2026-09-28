const buttons = document.querySelectorAll(".wash-card button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Service Booked Successfully!");
    });
});