#!/usr/bin/env node


import inquirer from "inquirer";
let answer:{sentence:string}

=await inquirer.prompt([{
    name:"sentence",
    type:"input",
    message:"Enter your sentence to count the word"
}])
let words=answer.sentence.trim().split(" ");
console.log(words);


console.log(`total word count is ${words.length}`);