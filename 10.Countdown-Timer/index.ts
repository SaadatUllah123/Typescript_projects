#! /usr/bin/env node

import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";

console.log(chalk.cyanBright(`------Welcome to countdown timer------`));


let userAns = await inquirer.prompt({
  name: "input",
  type: "number",
  message: "Please specify the number of minute.",
  validate: (input) => {
    if (isNaN(input)) {
      return "Please provide a valid number.";
    } else if (input > 60) {
      return "Please input a minute from 1 to 60.";
    } else {
      return true;
    }
  },
});

let { input } = userAns;

function countdownTimer(value: number) {
  let initTime = new Date().setMinutes(new Date().getMinutes() + value);
  let intervalTime = new Date(initTime);
  setInterval(() => {
    let currentTime = new Date();
    let timeDiffe = differenceInSeconds(intervalTime, currentTime);
    if (timeDiffe <= 0) {
      console.log("The time limit has ended.");
      process.exit();
    } else {
      let hours = Math.floor((timeDiffe % (3600 * 24)) / 3600);
      let minutes = Math.floor((timeDiffe % 3600) / 60);
      let seconds = Math.floor(timeDiffe % 60);
      console.log(chalk.greenBright(
        `Timer: ${hours.toString().padStart(2, "0")} : ${minutes
          .toString()
          .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`)
      );
    }
  }, 1000);
}

countdownTimer(input);
