#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string[] = [];

let whilecondition: boolean = true;

while (whilecondition) {
  console.clear();
  console.log(chalk.cyanBright(`------welcome to the todo list------`));
  let userChoice = await inquirer.prompt([
    {
      name: "choice",
      type: "list",
      message: "Please choose the action you'd like to perform.",
      choices: ["Add Item", "Update Item", "Delete Item", "View Items", "Exit"],
    },
  ]);

  if (userChoice.choice === "Add Item") {
    let userTodo = await inquirer.prompt([
      {
        type: "input",
        name: "todoItem",
        message: "Please enter your new items.",
        validate: (item) => {
          if (item) {
            return true;
          } else {
            return chalk.redBright(`Please enter the items.`);
          }
        },
      },
    ]);

    todoList.push(userTodo.todoItem);
    continue;
  } else if (userChoice.choice === "Update Item") {
    if (todoList.length === 0) {
      console.log(chalk.redBright(`Before updating item, please add items.`));
    } else {
      let updateTodo = await inquirer.prompt([
        {
          type: "list",
          name: "updateItem",
          message: "Choose the item you want to update.",
          choices: todoList.map((item) => item),
        },
        {
          type: "input",
          name: "addItem",
          message: "Enter the item you wish to add.",
        },
      ]);
      let { updateItem, addItem } = updateTodo;
      let index = todoList.indexOf(updateItem);
      todoList.splice(index, 1, addItem);
      continue;
    }
  } else if (userChoice.choice === "Delete Item") {
    if (todoList.length === 0) {
      console.log(chalk.redBright(`Before deleting item, please add items.`));
    } else {
      let deleteTodo = await inquirer.prompt([
        {
          name: "deleteItem",
          type: "list",
          message: "Select your delete item.",
          choices: todoList.map((item) => item),
        },
      ]);
      let { deleteItem } = deleteTodo;
      let index = todoList.indexOf(deleteItem);
      todoList.splice(index, 1);
      continue;
    }
  } else if (userChoice.choice === "View Items") {
    if (todoList.length === 0) {
      console.log(chalk.redBright(`Please todo list is empty.`));
    } else {
      console.log(chalk.cyanBright(`Todo List`));
      todoList.forEach((item, index) => {
        console.log(chalk.greenBright(`${index + 1}:${item}`));
      });
    }
  } else if (userChoice.choice === "Exit") {
    whilecondition = false;
    break;
  }

  let userAgain = await inquirer.prompt([
    {
      name: "again",
      type: "confirm",
      message: "Do you want to continue operation perform.",
      default: false,
    },
  ]);

  if (!userAgain.again) {
    whilecondition = false;
  }
}
