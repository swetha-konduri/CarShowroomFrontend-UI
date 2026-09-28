document.getElementById("signupForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let password =
    document.getElementById("password").value;

    let confirmPassword =
    document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("Passwords do not match!");
        return;
    }

    let name =
    document.getElementById("name").value;

    alert("Welcome " + name + "! Account Created Successfully.");

    document.getElementById("signupForm").reset();

});