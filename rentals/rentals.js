const searchInput = document.getElementById("searchInput");

// Search Function
searchInput.addEventListener("keyup", function () {

    let filter = searchInput.value.toLowerCase();

    let cards = document.querySelectorAll(".rental-card");

    cards.forEach(function(card) {

        let text = card.innerText.toLowerCase();

        if(text.includes(filter)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

});

// Booking Function
function bookCar(carName){

    document.getElementById("bookingBox").style.display = "block";

    document.getElementById("selectedCar").value = carName;

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}

// Confirm Booking
function confirmBooking(){

    let name = document.getElementById("customerName").value;

    let phone = document.getElementById("customerPhone").value;

    let car = document.getElementById("selectedCar").value;

    if(name === "" || phone === ""){
        alert("Please fill all fields");
        return;
    }

    alert(
        "✅ Booking Confirmed!\n\n" +
        "Name: " + name +
        "\nPhone: " + phone +
        "\nCar: " + car
    );

}