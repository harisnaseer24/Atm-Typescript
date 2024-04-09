#!  /usr/bin/env node 
import inquirer from "inquirer";
const pin=4545;
console.log("Pin : "+pin)
let Balance=100000;
let answer = await inquirer.prompt([
  {
    message: "Please Enter your pin..!",
    type: "number",
    name: "userpin",
  
  },
]);
if (answer.userpin==pin){
  let choice = await inquirer.prompt([
    {
      message: "Select Operation..!",
      type: "list",
      name: "Operation",
      choices: ["Cash Deposit", "Cash Withdrawl","Fast Cash","Balance Inquiry"],
    },
  ]);
if(choice.Operation=="Cash Deposit"){
  let amount = await inquirer.prompt([
    {
      message: "Enter Amount to be Deposited:",
      type: "number",
      name: "amountToDeposit",
    }
  ]);
  Balance+= amount.amountToDeposit;
  console.log("Amount Deposited Successfully..!")
  console.log("New Balance: "+Balance);
}
else if(choice.Operation=="Cash Withdrawl"){
  let amount = await inquirer.prompt([
    {
      message: "Enter Amount to be Withdrawn:",
      type: "number",
      name: "amountToWithdraw",
    }
  ]);
  if(amount.amountToWithdraw<=Balance){
    Balance-= amount.amountToWithdraw;
    console.log("Amount Withdrawn Successfully..!")
    console.log("New Balance: "+Balance);
  }else{
    console.log("Insufficient Balance..!")
  }
 
}
else if(choice.Operation=="Fast Cash"){
  let amount = await inquirer.prompt([
    {
      message: "Enter Amount to be Withdrawn:",
      type: "list",
      name: "fastCash",
      choices:[1000,2000,5000,10000,15000,20000]
    }
  ]);
  if(amount.fastCash<=Balance){
  Balance-= amount.fastCash;
  console.log("Amount Withdrawn Successfully..!")
  console.log("New Balance: "+Balance);}
  else{
    console.log("Insufficient Balance..!")
  }

}
else if(choice.Operation=="Balance Inquiry"){
 
  console.log(`Your Balance is: Rs. ${Balance}`)

}
}else{
  console.log("Invalid Pin");
}
  




