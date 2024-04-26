#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

console.clear();
console.log(chalk.cyanBright("------Welcome To Typescript Quiz------"));

let correctAns: number = 0;
let incorrectAns: number = 0;
let firstQueu: string;
let secondQueu: string;
let thirdQueu: string;
let forthQueu: string;
let fiveQueu: string;

let userAnswers = await inquirer.prompt([
  {
    name: "firstAns",
    type: "list",
    message: `let numbers: number[] = [1, 2, 3, 4, 5];\n  let filteredNumbers = numbers.filter(num => num % 2 === 0)?`,
    choices: ["[1, 3, 5]", "[2, 4]", "[1, 2, 3, 4, 5]", "[]"],
  },
  {
    name: "secondAns",
    type: "list",
    message: `let x: any = 10;\n  let y: number = x?`,
    choices: [
      "y will be 10.",
      "y will be undefined.",
      "Compilation Error.",
      "y will be any.",
    ],
  },
  {
    name: "thirdAns",
    type: "list",
    message:
      "Which of the following TypeScript types allows multiple types for a variable?",
    choices: ["number", "biginit", "any", "boolean"],
  },
  {
    name: "forthAns",
    type: "list",
    message: "What does the unknown type in TypeScript signify?",
    choices: [
      `A variable whose type cannot be inferred.`,
      "A variable that can hold any type.",
      "A variable with no specified type.",
      "A variable with a specific but unknown type.",
    ],
  },
  {
    name: "fiveAns",
    type: "list",
    message: `What is the purpose of TypeScript's "interface"?`,
    choices: [
      "To define classes.",
      "To create objects.",
      "To define data types.",
      "To import modules.",
    ],
  },
]);

if (userAnswers.firstAns === "[2, 4]") {
  correctAns++;
  firstQueu = "Answer is correct.";
} else {
  incorrectAns++;
  firstQueu = "Answer is incorrect.";
}

if (userAnswers.secondAns === "y will be 10.") {
  correctAns++;
  secondQueu = "Answer is correct.";
} else {
  incorrectAns++;
  secondQueu = "Answer is incorrect.";
}

if (userAnswers.thirdAns === "any") {
  correctAns++;
  thirdQueu = "Answer is correct.";
} else {
  incorrectAns++;
  thirdQueu = "Answer is incorrect.";
}

if (userAnswers.forthAns === "A variable whose type cannot be inferred.") {
  correctAns++;
  forthQueu = "Answer is correct.";
} else {
  incorrectAns++;
  forthQueu = "Answer is incorrect.";
}

if (userAnswers.fiveAns === "To define data types.") {
  correctAns++;
  fiveQueu = "Answer is correct.";
} else {
  incorrectAns++;
  fiveQueu = "Answer is incorrect.";
}

function ShowResult(): void {
  console.clear();
  console.log(
    `\n1.Question: ${chalk.greenBright(
      firstQueu
    )}\n2.Question: ${chalk.greenBright(
      secondQueu
    )}\n3.Question: ${chalk.greenBright(
      thirdQueu
    )}\n4.Question: ${chalk.greenBright(
      forthQueu
    )}\n5.Question: ${chalk.greenBright(fiveQueu)}`
  );
  console.log(chalk.cyanBright(`\nContragulation!`));
  console.log(
    chalk.greenBright(
      `Your correct answer are: ${chalk.white(
        correctAns
      )}\nYour incorrect answer are: ${chalk.white(incorrectAns)}`
    )
  );
}

ShowResult();
