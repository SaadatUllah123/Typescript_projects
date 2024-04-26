#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyanBright(`------Welcome to word counter------`));

interface userInputType {
  paragraph: string;
}

const userInput: userInputType = await inquirer.prompt([
  {
    name: "paragraph",
    type: "input",
    message: "Enter your paragraph:",
  },
]);

const words = userInput.paragraph.trim().split(" ");

console.log(
  chalk.greenBright(
    `Total words in the paragraph is: ${chalk.white(words.length)}`
  )
);
