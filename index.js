#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\tWelcom to CLI-Number-Guessing-Game\n");
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Enter your guess number(Number limit from 1 to 10):",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congratulations ! you guess a correct number.");
}
else {
    console.log("Sorry, you guess wrong number");
}
