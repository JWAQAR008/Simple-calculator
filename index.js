#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnNmber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Slect one of the operators to perform action",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division",],
    },
]);
//Conditional statment
if (answer.operator === "Addition") {
    console.log(answer.firstnNmber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstnNmber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstnNmber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log(answer.firstnNmber / answer.secondNumber);
}
else {
    console.log("Please select valid operator");
}
