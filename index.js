import inquirer from "inquirer";
//initialize user balance and pin code
let myBalance = 5000;
let myPin = 1234;
//Print welcome message
console.log("welcome to code with Fakiha - ATM Machine");
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "enter your pin code:"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("pin is correct , ligin successfully!!");
    console.log(`current account balance is ${myBalance} `);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            type: "list",
            message: "selectan operation",
            choices: ["withDraw Amount", "check balance"]
        }
    ]);
    if (operationAns.operation === "withDraw Amount") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withDraw:"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("insufficient Balance");
        }
        else {
            myBalance -= amountAns.amount;
            console.log(`${amountAns.amount} withDraw successfully`);
            console.log(`your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation === "chech Balance") {
        console.log(`your account balance is: ${myBalance}`);
    }
}
else {
    console.log("Pin is incorrect , Try Again!");
}
