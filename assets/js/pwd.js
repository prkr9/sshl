var secretCode = "YldGMGRIUm9aV05vWVcxdw==";

function checkPassword() {
    var input = document.getElementById("pwd").value;

    if (input === atob(atob(secretCode))) {
        location.pathname = "/form.html";
    } else if (input === "") {
        alert("Write a password atleast");
    } else {
        alert("Wrong Password! Try Again")
    }
}