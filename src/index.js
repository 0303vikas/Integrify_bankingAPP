"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bank_1 = __importDefault(require("./bank"));
const branch_1 = __importDefault(require("./branch"));
const customer_1 = __importDefault(require("./customer"));
const arizonaBank = new bank_1.default("Arizona");
const westBranch = new branch_1.default("West Branch");
const sunBranch = new branch_1.default("Sun Branch");
const customer1 = new customer_1.default("John");
const customer2 = new customer_1.default("Anna");
const customer3 = new customer_1.default("John");
arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch);
arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");
arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);
arizonaBank.addCustomerTransaction(westBranch, customer1.id, 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.id, 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.id, 3000);
customer1.addTransactions(-1000);
console.log(customer1.getBalance());
console.log(arizonaBank.listCustomers(westBranch, true));
console.log(arizonaBank.listCustomers(sunBranch, true));