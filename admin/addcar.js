const button = document.querySelector("button");

button.addEventListener("click", () => {

    const carName = document.querySelectorAll("input")[0].value;
    const carPrice = document.querySelectorAll("input")[1].value;
    const rentPerDay = document.querySelectorAll("input")[2].value;
    const topSpeed = document.querySelectorAll("input")[3].value;
    const fuelType = document.querySelectorAll("input")[4].value;
    const mileage = document.querySelectorAll("input")[5].value;
    const imageUrl = document.querySelectorAll("input")[6].value;
    const description = document.querySelector("textarea").value;

    if(
        carName === "" ||
        carPrice === "" ||
        rentPerDay === ""
    ){
        alert("Please fill all required fields");
        return;
    }

    const car = {
        carName,
        carPrice,
        rentPerDay,
        topSpeed,
        fuelType,
        mileage,
        imageUrl,
        description
    };

    let cars = JSON.parse(localStorage.getItem("cars")) || [];

    cars.push(car);

    localStorage.setItem("cars", JSON.stringify(cars));

    alert("Car Added Successfully 🚗");

    document.querySelectorAll("input").forEach(input=>{
        input.value = "";
    });

    document.querySelector("textarea").value = "";

});