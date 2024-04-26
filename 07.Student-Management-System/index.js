#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let loopCondition = true;
while (loopCondition) {
    console.clear();
    let userInput = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "Enter your name:",
            validate: (input) => {
                if (isNaN(input)) {
                    return true;
                }
                else {
                    return chalk.redBright("Please enter a valid name.");
                }
            }
        },
        {
            name: "fatherName",
            type: "input",
            message: "Enter your father name:",
            validate: (input) => {
                if (isNaN(input)) {
                    return true;
                }
                else {
                    return chalk.redBright("Please enter a valid father name.");
                }
            }
        },
        {
            name: "age",
            type: "number",
            message: "Enter your age:",
            validate: (input) => {
                if (isNaN(input)) {
                    return chalk.redBright("Please enter a valid age.");
                }
                else {
                    return true;
                }
            }
        },
        {
            name: "course",
            type: "list",
            message: "select the course:",
            choices: ["typescript", "python", "HTML", "CSS"],
        },
        {
            name: "gender",
            type: "list",
            message: "select the gender:",
            choices: ["male", "female"],
        },
    ]);
    let { name, fatherName, age, course, gender } = userInput;
    function studentData(id) {
        console.log(`Student Name: ${chalk.green(name)}\nF/name: ${chalk.green(fatherName)}\nAge: ${chalk.green(age)}\nId: ${chalk.green(id)}\nCourse: ${chalk.green(course)}\nGender: ${chalk.green(gender)}`);
    }
    let idnum = Math.floor(Math.random() * 3 + 1);
    studentData(idnum);
    let studDataAns = await inquirer.prompt([
        {
            name: "agaStudData",
            type: "confirm",
            message: "Do you want to enter student Data:",
            default: false,
        },
    ]);
    if (!studDataAns.agaStudData) {
        loopCondition = false;
    }
}
