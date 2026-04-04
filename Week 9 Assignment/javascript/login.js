// Password is fish

function promptUser() {
    let userInput = window.prompt("Please enter the password:", "(hint: fish)");

    if (userInput === "fish") {
        window.alert("You are logged in. ");
    } else {
        window.alert("Invalid Password.");
    }
}