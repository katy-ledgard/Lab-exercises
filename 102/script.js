// let Name = prompt("Hello new friend, what is your name?");
// console.log(Name)

// const Welcome = alert("Welcome " + Name + "! I hope you enjoy my site!") 

// if (Name === "Rich"){ 
//     console.log(Thanks for looking, Rich!); 
// } else if (Name === "Chris"){
//     console.log(Great teaching, Chris!);
// } else if (Name === "Sam"){
//     console.log(Thanks, Sam!);
// } else {
//     console.log("Hello everybody else!");
// }


// const Welcome = alert("Welcome " + Name + "! I hope you enjoy my site!") 

function yourName() {
    let user = prompt("What is your name?");
    return document.write(user);
}



function preferredFood() {
    let food = prompt("Do you prefer pizza, pasta or jacket potato?");
    let message ="";

    if (food === "pizza") {
        message = "I love pizza too!";
    }
    else if (food === "pasta") {
        message = "Pasta is delicious!";
    }
    else if (food === "jacket potato") {
        message = "You can't beat a jacket potato!";
    }
    else {
        message = "Hey, that wasn't an option!"
    }

    return document.write(message);
}


// function mySum(num1, num2, num3) {
//     let x = num1 + num2;
//     console.log(x);
// }

// console.log(mySum(5, 2))

// function sum2() {
//     let x = 2 * 4;
//     console.log(x);
// }

// sum2()

// function typeBlue() {
//     let blue = prompt("Type the word 'blue'");
//     let message ="";

//     if (blue === "blue") {
//         message = "Great, thanks!";
//     }
    
//     else (blue !== "blue"); {
//         message = "Try again!";
//         prompt("Type the word 'blue'");
//         if (blue === "blue") {
//             message = "Great, thanks!";
//         }
        
//         else (blue !== "blue"); {
//             message="Nevermind, let's move on!"

//     }
//     }
//     alert(message);
    
// }

// typeBlue()

// function typeBlue2() {
//     let blue2 = prompt("Type the word 'blue'");
//     let message ="";

//     if (blue2 === "blue") {
//         message = "Great, thanks!";
//     }
    
//     else {
//         message = "Don't worry, let's move on!";
//     }

//     alert(message)
// }

// typeBlue2()


function timeOfDay() {
    let time = prompt("What hour is it (0-23?)");
    let location = prompt("Which country are you in?");
    let message2 ="";

    if (time <= 11 && location === "England") {
        message2="Good Morning, England!"
    }

    else if (time <= 18 && location === "England") {
        message2="Good Afternoon, England!";
    }

    else if (time <= 23 && location === "England") {
        message2="Good night, England!";
    }

    else {
        message2="hmmm, something went wrong..."
    }

    return document.write(message2);
}