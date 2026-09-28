document.getElementById("testDriveForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name =
    document.getElementById("name").value;

    let car =
    document.getElementById("car").value;

    document.getElementById("message").innerHTML =
    "✅ Test Drive Booked Successfully for <b>" +
    car +
    "</b><br><br>Thank You, " +
    name;

});