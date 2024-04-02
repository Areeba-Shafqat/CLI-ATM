#! /usr/bin/env node
//import inquirer package
import inquirer from "inquirer";
// my account balance
let accountBalance = 1000000;
// welcome message
console.log("    WELCOME TO ATM MACHINE    ");
console.log("    ______________________    \n\n");
//taking user input as pin code
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter Your Pin Number:   ",
        type: "number",
    },
    // confirm user pin code
    {
        name: "cnfrmPin",
        message: "Confirm Your Pin Number: ",
        type: "number",
    },
]);
// pin code is match
if (pinAnswer.pin === pinAnswer.cnfrmPin) {
    console.log("Valid Pin!!");
    // ask to perform acctions
    let operationMenu = await inquirer.prompt([
        {
            name: "operation",
            message: "Select An Option From The List: ",
            type: "list",
            choices: ["Withdraw", "Fast Cash", "Check Balance"],
        },
    ]);
    // if select withdraw
    if (operationMenu.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Your Required Amount: ",
                type: "number",
            },
        ]);
        if (amountAns.amount > accountBalance) {
            console.log("Insufficient Balance!!");
        }
        else if ((accountBalance -= amountAns.amount)) {
            console.log(`Your Remaining Balance Is : ${accountBalance}`);
        }
    }
    // if select fast cash
    else if (operationMenu.operation === "Fast Cash") {
        let fastCash = await inquirer.prompt([
            {
                name: "action",
                message: "How Much Cash You Want To Withdraw: ",
                type: "list",
                choices: ["1000", "5000", "10000", "25000", "50000"],
            },
        ]);
        if (fastCash.action === fastCash.action) {
            accountBalance -= fastCash.action;
            console.log(`The Remaining Balance Is: ${accountBalance}`);
        }
    }
    // if select check balance
    else if (operationMenu.operation === "Check Balance") {
        console.log(`Your Balance Is: ${accountBalance}`);
    }
}
else {
    console.log("Invalid Pin!!");
}
//End message
console.log("\n\n           THE END");
console.log("           _______");
