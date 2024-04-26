#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
let users = {
    idNumber: Math.floor(Math.random() * 2364),
    pinCode: Math.floor(Math.random() * 1758),
    balance: 10000, // dollar
};
let loopCondition = true;
while (loopCondition) {
    console.clear();
    console.log(chalk.cyanBright(`-------Welcome To The ATM Machine-------`));
    console.log(chalk.greenBright(`Id Number: ${chalk.white(users.idNumber)}`));
    console.log(chalk.greenBright(`Pin code: ${chalk.white(users.pinCode)}`));
    let idAns = await inquirer.prompt([
        {
            name: "userId",
            type: "number",
            message: "Enter your id number:",
            validate: (input) => {
                if (isNaN(input)) {
                    return chalk.redBright(`Please enter a valid id number.`);
                }
                else {
                    return true;
                }
            },
        },
    ]);
    if (idAns.userId === users.idNumber) {
        let pinAns = await inquirer.prompt([
            {
                name: "userPin",
                type: "number",
                message: "Enter your pin code:",
                validate: (input) => {
                    if (isNaN(input)) {
                        return chalk.redBright(`Please enter a valid pin code.`);
                    }
                    else {
                        return true;
                    }
                },
            },
        ]);
        if (pinAns.userPin === users.pinCode) {
            let accountAns = await inquirer.prompt([
                {
                    name: "accounttype",
                    type: "list",
                    message: "Select your account type",
                    choices: ["Current account", "Saving account"],
                },
            ]);
            let transactionAns = await inquirer.prompt([
                {
                    name: "transactionMethod",
                    type: "list",
                    message: "Select your transaction method:",
                    choices: ["Withdraw", "Fast cash", "Check balance", "Exit"],
                },
            ]);
            if (transactionAns.transactionMethod === "Withdraw") {
                let amountAns = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter your amount:",
                        validate: (input) => {
                            if (isNaN(input)) {
                                return chalk.redBright(`Please enter a valid amount.`);
                            }
                            else {
                                return true;
                            }
                        },
                    },
                ]);
                if (users.balance >= amountAns.amount) {
                    users.balance -= amountAns.amount;
                    console.log(chalk.greenBright(`Your remaining balance is: ${chalk.white(users.balance)}`));
                }
                else if (users.balance < amountAns.amount) {
                    console.log(chalk.redBright("Insufficient balance."));
                }
            }
            else if (transactionAns.transactionMethod === "Fast cash") {
                let amountAns = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "list",
                        message: "select your amount.",
                        choices: [500, 1000, 5000, 8000, 10000],
                    },
                ]);
                users.balance -= amountAns.amount;
                console.log(chalk.greenBright(`Your remaining balance is: ${chalk.white(users.balance)}`));
            }
            else if (transactionAns.transactionMethod === "Check balance") {
                console.log(chalk.greenBright(`Your balance is: ${chalk.white(users.balance)}`));
            }
            else if (transactionAns.transactionMethod === "Exit") {
                loopCondition = false;
                console.log(chalk.cyanBright("\nThank you for using the ATM machine."));
            }
        }
        else {
            console.log(chalk.redBright("Incorrect pin code."));
        }
    }
    else {
        console.log(chalk.redBright("Incorrect id number."));
    }
    loopCondition = false;
}
