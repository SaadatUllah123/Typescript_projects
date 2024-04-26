#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";

interface conversionType {
  PKR: currencyType;
  USD: currencyType;
  EURO: currencyType;
  GBP: currencyType;
}

interface currencyType {
  PKR: number;
  USD: number;
  EURO: number;
  GBP: number;
}

interface userAnsType {
  userInput: string;
  userOutput: string;
  amount: number;
}

let conversion: conversionType = {
  PKR: {
    PKR: 1,
    USD: 0.0036,
    EURO: 0.0033,
    GBP: 0.0029,
  },
  USD: {
    PKR: 277.83,
    USD: 1,
    EURO: 0.8,
    GBP: 0.0029,
  },
  EURO: {
    PKR: 299.16,
    USD: 1.08,
    EURO: 1,
    GBP: 0.86,
  },
  GBP: {
    PKR: 349.42,
    USD: 1.26,
    EURO: 1.17,
    GBP: 1,
  },
};

let loopCondition = true;

while (loopCondition) {
  console.clear();
  console.log(
    chalk.cyanBright("------Welcome to the currency converter------")
  );

  let userAns: userAnsType = await inquirer.prompt([
    {
      name: "userInput",
      type: "list",
      message: "Select your currency:",
      choices: ["PKR", "USD", "EURO", "GBP"],
    },
    {
      name: "userOutput",
      type: "list",
      message: "Select your convert currency:",
      choices: ["PKR", "USD", "EURO", "GBP"],
    },
    {
      name: "amount",
      type: "number",
      message: "Enter your amount:",
      validate: (input) => {
        if (isNaN(input)) {
          return chalk.redBright("Please enter a numerical amount.");
        } else {
          return true;
        }
      },
    },
  ]);

  const { userInput } = userAns;
  const { userOutput } = userAns;
  const { amount } = userAns;

  if (userInput === "PKR") {
    if (userOutput === "PKR") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.PKR.PKR
          )}`
        )
      );
    } else if (userOutput === "USD") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.PKR.USD
          )}`
        )
      );
    } else if (userOutput === "EURO") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.PKR.EURO
          )}`
        )
      );
    } else if (userOutput === "GBP") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.PKR.GBP
          )}`
        )
      );
    }
  } else if (userInput === "USD") {
    if (userOutput === "PKR") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.USD.PKR
          )}`
        )
      );
    } else if (userOutput === "USD") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.USD.USD
          )}`
        )
      );
    } else if (userOutput === "EURO") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.USD.EURO
          )}`
        )
      );
    } else if (userOutput === "GBP") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.USD.GBP
          )}`
        )
      );
    }
  } else if (userInput === "EURO") {
    if (userOutput === "PKR") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.EURO.PKR
          )}`
        )
      );
    } else if (userOutput === "USD") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.EURO.USD
          )}`
        )
      );
    } else if (userOutput === "EURO") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.EURO.EURO
          )}`
        )
      );
    } else if (userOutput === "GBP") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.EURO.GBP
          )}`
        )
      );
    }
  } else if (userInput === "GBP") {
    if (userOutput === "PKR") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.GBP.PKR
          )}`
        )
      );
    } else if (userOutput === "USD") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.GBP.USD
          )}`
        )
      );
    } else if (userOutput === "EURO") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.GBP.EURO
          )}`
        )
      );
    } else if (userOutput === "GBP") {
      console.log(
        chalk.greenBright(
          `The exchange rate for converting ${userInput} to ${userOutput} is: ${chalk.whiteBright(
            amount * conversion.GBP.GBP
          )}`
        )
      );
    }
  }

  const againConv = await inquirer.prompt([
    {
      name: "converMore",
      type: "confirm",
      message: "Do you want more conversions?",
      default: false,
    },
  ]);

  if (!againConv.converMore) {
    loopCondition = false;
  }
}
