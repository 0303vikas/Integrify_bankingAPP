# TypeScript Assignment
- Creating a Bank System

>## Installation
> - npm install
> - npm run build
> - npm run watch

>## Usage
> Test out the code using these commands
>const arizonaBank = new Bank("Arizona")
>const westBranch = new Branch("West Branch")
>const sunBranch = new Branch("Sun Branch")
>const customer1 = new Customer("John")
>const customer2 = new Customer("Anna")
>const customer3 = new Customer("John")
>
>arizonaBank.addBranch(westBranch)
>arizonaBank.addBranch(sunBranch)
>arizonaBank.addBranch(westBranch) 
>
>arizonaBank.findBranchByName("bank")
>arizonaBank.findBranchByName("sun")
>
>arizonaBank.addCustomer(westBranch, customer1)
>arizonaBank.addCustomer(westBranch, customer3)
>arizonaBank.addCustomer(sunBranch, customer1)
>arizonaBank.addCustomer(sunBranch, customer2)
>
>arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 3000)
>arizonaBank.addCustomerTransaction(westBranch, customer1.getId, 2000)
>arizonaBank.addCustomerTransaction(westBranch, customer2.getId, 3000)
>
>customer1.addTransactions(-1000)
>console.log(customer1.getBalance())
>console.log(arizonaBank.listCustomers(westBranch, true))
>console.log(arizonaBank.listCustomers(sunBranch,true))


## Result
> Check Result.png

## File structure
project-name/
├── src/
│   ├── index.ts
│   ├── branch.ts
│   ├── bank.ts
│   └── customer.ts
├── .gitignore
├── README.md
├── Result.png
└── package.json


