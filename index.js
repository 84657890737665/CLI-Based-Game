#! /usr/bin/dev node
import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome To The Game");
const answer = await inquirer.prompt([
    {
        name: "PlayerGuessedNumber",
        type: "number",
        message: "Please Guess A Number Between 1 to 6: ",
    },
]);
{
    if (answer.PlayerGuessedNumber === randomNumber) {
        console.log("Congratulations! You GUessed The Right Number");
    }
    else
        console.log("You Guessed Wrong Number");
}
console.log(" Game Ended!");
