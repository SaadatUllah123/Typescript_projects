#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let whileCondition = true;
while (whileCondition) {
    console.clear();
    console.log(chalk.cyanBright(`------Welcome to the simple calculator------`));
    const userAns = await inquirer.prompt([
        {
            message: "Enter your first number:",
            type: "number",
            name: "firstNumber",
            validate: (num) => {
                if (isNaN(num)) {
                    return chalk.redBright(`Please enter your numerical value.`);
                }
                else {
                    return true;
                }
            },
        },
        {
            message: "Select one of the operator to perform action.",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
        {
            message: "Enter your second number:",
            type: "number",
            name: "secondNumber",
            validate: (num) => {
                if (isNaN(num)) {
                    return chalk.redBright(`Please enter your numerical value.`);
                }
                else {
                    return true;
                }
            },
        },
    ]);
    let { firstNumber, secondNumber, operator } = userAns;
    if (operator === "Addition") {
        console.log(chalk.greenBright(`${firstNumber + secondNumber}`));
    }
    else if (operator === "Subtraction") {
        console.log(chalk.greenBright(`${firstNumber - secondNumber}`));
    }
    else if (operator === "Multiplication") {
        console.log(chalk.greenBright(`${firstNumber * secondNumber}`));
    }
    else if (operator === "Division") {
        console.log(chalk.greenBright(`${firstNumber / secondNumber}`));
    }
    let userAgain = await inquirer.prompt([
        {
            name: "again",
            type: "confirm",
            message: "Do you want to continue calculate?",
            default: false,
        },
    ]);
    if (!userAgain.again) {
        whileCondition = false;
    }
}
