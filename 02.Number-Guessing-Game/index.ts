#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let whileCondition = true;

while (whileCondition) {
  const computerChoice = Math.floor(Math.random() * 8 + 1);

  console.clear();
  console.log(chalk.cyanBright(`-----Welcome To Number Guessing Game-----`));

  const userInput = await inquirer.prompt([
    {
      message: "Please guess a number between 1-8: ",
      type: "number",
      name: "userChoice",
      validate: (input) => {
        if (isNaN(input)) {
          return chalk.redBright(`Please input a number.`);
        } else if (input > 8) {
          return chalk.redBright(`Please enter a number between 1 and 8.`);
        } else {
          return true;
        }
      },
    },
  ]);

  if (computerChoice === userInput.userChoice) {
    console.log(chalk.green(`Congratulations! you guessed right number.`));
  } else {
    console.log(chalk.redBright(`You guessed wrong number.`));
  }

  let userAgain = await inquirer.prompt([
    {
      name: "again",
      type: "confirm",
      message: "Do you want to continue the number guessing game?",
      default: false,
    },
  ]);

  if (!userAgain.again) {
    whileCondition = false;
  }
}
