document.getElementById("loginForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    const email =
    document.getElementById("email").value;

    alert("Welcome " + email);

});