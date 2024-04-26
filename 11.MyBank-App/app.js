#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class customer {
    fName;
    lName;
    age;
    gender;
    phoneNumber;
    email;
    accountNumber;
    constructor(fName, lName, age, gender, phoneNumber, email, accountNumber) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.gender = gender;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.accountNumber = accountNumber;
    }
}
class bank {
    customers = [];
    accounts = [];
    addCustomer(customerObj) {
        this.customers.push(customerObj);
    }
    addAccount(accountObj) {
        this.accounts.push(accountObj);
    }
}
class BankAccount {
    accountNumber;
    balance;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            console.log(chalk.redBright(`Invalid amount. Please enter a positive number.`));
            return;
        }
        this.balance += amount;
        console.log(chalk.green(`Deposited ${chalk.white(amount)}. Current balance is ${chalk.white(this.balance)}.`));
    }
    withdraw(amount) {
        if (amount <= 0) {
            console.log(chalk.redBright("Invalid amount. Please enter a positive number."));
            return;
        }
        if (amount > this.balance) {
            console.log(chalk.redBright("Insufficient balance."));
            return;
        }
        this.balance -= amount;
        console.log(chalk.green(`Withdrew ${chalk.white(amount)}. Current balance is ${chalk.white(this.balance)}.`));
    }
    getBalance() {
        console.log(chalk.green(`Account balance is ${chalk.white(this.balance)}.`));
    }
}
let loopCondition = true;
while (loopCondition) {
    console.log(chalk.cyanBright(`-----------Welcome to my bank----------`));
    console.log(chalk.green(`\tCreate your bank account`));
    let createAccount = await inquirer.prompt([
        {
            name: "fname",
            type: "input",
            message: "Enter your First name:",
            validate: (input) => {
                if (isNaN(input)) {
                    return true;
                }
                else {
                    return chalk.redBright(`Please enter a valid name.`);
                }
            }
        },
        {
            name: "lname",
            type: "input",
            message: "Enter your last name:",
            validate: (input) => {
                if (isNaN(input)) {
                    return true;
                }
                else {
                    return chalk.redBright(`Please enter a valid name.`);
                }
            }
        },
        {
            name: "age",
            type: "number",
            message: "Enter your age:",
            validate: (input) => {
                if (isNaN(input)) {
                    return chalk.redBright(`Please enter a valid age.`);
                }
                else {
                    return true;
                }
            }
        },
        {
            name: "gender",
            type: "list",
            message: "Select your gender:",
            choices: ["male", "female"],
        },
        {
            name: "phoneNumber",
            type: "number",
            message: "Enter your phone number:",
            validate: (input) => {
                if (isNaN(input)) {
                    return chalk.redBright(`Please enter a valid phone number.`);
                }
                else {
                    return true;
                }
            }
        },
        {
            name: "email",
            type: "input",
            message: "Enter your email:",
            validate: (input) => {
                if (isNaN(input)) {
                    return true;
                }
                else {
                    return chalk.redBright(`Please enter a valid email.`);
                }
            }
        },
    ]);
    let { fname, lName, age, gender, phoneNumber, email } = createAccount;
    const customerObj = new customer(fname, lName, age, gender, phoneNumber, email, Math.floor(Math.random() * 1000000));
    const accountObj = new BankAccount(customerObj.accountNumber, 10000);
    const myBank = new bank();
    myBank.addCustomer(customerObj),
        myBank.addAccount(accountObj),
        console.clear();
    console.log(chalk.green(`Your account has been registered successfully.`));
    console.log(chalk.green(`Your account number is ${chalk.white(accountObj.accountNumber)}`));
    let userOperation = await inquirer.prompt([
        {
            name: "selectOperation",
            type: "list",
            message: "Which next operation would you like to perform?",
            choices: ["Create your account", "Log in to your account"],
        },
    ]);
    if (userOperation.selectOperation === "Create your account") {
        console.clear();
        continue;
    }
    else if (userOperation.selectOperation === "Log in to your account") {
        let userlogin = await inquirer.prompt([
            {
                name: "login",
                type: "number",
                message: "Enter your account number:",
                validate: (input) => {
                    if (isNaN(input)) {
                        return chalk.redBright(`Please enter a valid account number.`);
                    }
                    else {
                        return true;
                    }
                }
            },
        ]);
        let checkAccount = myBank.accounts.find((acc) => {
            return acc.accountNumber == userlogin.login;
        });
        if (!checkAccount) {
            console.log(chalk.redBright(`invalid account number: ${chalk.white(userlogin.login)}`));
        }
        if (checkAccount) {
            let userChoice = await inquirer.prompt([
                {
                    name: "choiceMethod",
                    type: "list",
                    message: "Select the choice:",
                    choices: ["Deposit", "Withdraw", "Check balance", "Exit"],
                },
            ]);
            if (userChoice.choiceMethod === "Deposit") {
                let userAmount = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter deposit amount: ",
                    },
                ]);
                accountObj.deposit(userAmount.amount);
            }
            else if (userChoice.choiceMethod === "Withdraw") {
                let userAmount = await inquirer.prompt([
                    {
                        name: "amount",
                        type: "number",
                        message: "Enter withdraw amount: ",
                    },
                ]);
                accountObj.withdraw(userAmount.amount);
            }
            else if (userChoice.choiceMethod === "Check balance") {
                accountObj.getBalance();
            }
            else if (userChoice.choiceMethod === "Exit") {
                loopCondition = false;
            }
        }
        loopCondition = false;
    }
}
