#!/usr/bin/env node
import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        name: "sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }]);
let words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`the total word count is ${words.length}`);
