let answer;

while (answer != "indigo") {
    answer = prompt("Guess which colour of the rainbow I am thinking of?");
    if (answer != "indigo") {
        alert("Try again!");
    } else {
    alert("Congratulations, you guessed right!");
    }
}

