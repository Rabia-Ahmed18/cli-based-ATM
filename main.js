"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Welcome to Rabia ATM machine");
const inquirer_1 = __importDefault(require("inquirer"));
let mybalance = 10000;
let mypin = 1234;
let pinanswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "Please enter your pin",
        type: "number",
    }
]);
// 1234 === 12345 false 
if (pinanswer.pin === mypin) {
    console.log("correct pin code!!!");
    let operationans = await inquirer_1.default.prompt([
        {
            name: "operation",
            message: "correct pin code",
            type: "list",
            choices: ["withdraw", "checkbalance", "fastcash"]
        }
    ]);
    console.log(operationans);
    if (operationans.operation === "withdraw") {
        let amountans = await inquirer_1.default.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number"
            }]);
        if (amountans.amount <= 5000 && amountans.amount >= 500) {
            mybalance -= amountans.amount;
            console.log(`your remaining balance is ${mybalance}`);
        }
        else {
            console.log("invalid amount");
        }
    }
    else if (operationans.operation === "checkbalance") {
        console.log(`your balance is : ${mybalance}`);
    }
    else {
        console.log("Incorect pin code!");
    }
}
