function showDetails(button) {

    const card = button.parentElement;

    const carName = card.querySelector("h2").innerText;
    const details = card.querySelectorAll("p");

    const price = details[0].innerText;
    const rent = details[1].innerText;

    alert(
        "🚗 " + carName +
        "\n\n" + price +
        "\n" + rent +
        "\n\nAvailable for Booking"
    );
}