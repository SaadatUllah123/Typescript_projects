#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelIncrease() {
        this.fuel += 25;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelIncrease() {
        this.fuel += 25;
    }
    fuelDecrease() {
        this.fuel -= 25;
    }
}
let whileCondition = true;
do {
    console.clear();
    console.log(chalk.cyanBright(`------Welcome to the game adventure------`));
    const userAns = await inquirer.prompt([
        {
            name: "playerName",
            type: "input",
            message: "Enter your name:",
            validate: (input) => {
                if (isNaN(input)) {
                    return true;
                }
                else {
                    return chalk.redBright(`Please enter your accurate name.`);
                }
            },
        },
        {
            name: "oppoSelect",
            type: "list",
            message: "Select your opponent:",
            choices: ["Phantom Reaper", "Deathblade", "Venomblade"],
        },
    ]);
    const { playerName, oppoSelect } = userAns;
    const player = new Player(playerName);
    const opponent = new Opponent(oppoSelect);
    while (true) {
        const userChoice = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "Choose an action to perform:",
                choices: ["Attack", "Amplify the fuel"],
            },
        ]);
        if (userChoice.choice === "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                player.fuelDecrease();
                console.clear();
                console.log(chalk.redBright(`${player.name} fuel is ${player.fuel}`));
                console.log(chalk.greenBright(`${opponent.name} fuel is ${opponent.fuel}`));
                if (player.fuel <= 0) {
                    console.log(chalk.redBright(`You lose! Better luck next time.`));
                    break;
                }
            }
            if (num <= 0) {
                opponent.fuelDecrease();
                console.clear();
                console.log(chalk.greenBright(`${player.name} fuel is ${player.fuel}`));
                console.log(chalk.redBright(`${opponent.name} fuel is ${opponent.fuel}`));
                if (opponent.fuel <= 0) {
                    console.log(chalk.greenBright(`You win!`));
                    break;
                }
            }
        }
        else if (userChoice.choice === "Amplify the fuel") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                if (player.fuel < 100) {
                    player.fuelIncrease();
                    console.log(chalk.greenBright(`${player.name} fuel has been increased is 25.`));
                }
                else if ((player.fuel = 100)) {
                    console.log(chalk.greenBright(`${player.name} fuel cannot exceed 100.`));
                }
            }
            if (num <= 0) {
                if (opponent.fuel < 100) {
                    opponent.fuelIncrease();
                    console.log(chalk.greenBright(`${opponent.name} fuel has been increased is 25.`));
                }
                else if ((opponent.fuel = 100)) {
                    console.log(chalk.greenBright(`${opponent.name} fuel cannot exceed 100.`));
                }
            }
        }
    }
    let userAgain = await inquirer.prompt([
        {
            name: "playAgain",
            type: "confirm",
            message: "Do you want to continue game.",
            default: false,
        },
    ]);
    if (!userAgain.playAgain) {
        whileCondition = false;
    }
} while (whileCondition);
