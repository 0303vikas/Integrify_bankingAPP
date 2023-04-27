"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Represents a bank branch with customers and transactions.
 * @constructor @param name: string
 * @param  name: string
 * @param customers: Customer[]
 */
class Branch {
    constructor(name) {
        this._name = name;
        this._customers = [];
    }
    /**
     * Returns the name of bank.
     * @return :string
     */
    get name() {
        return this._name;
    }
    /**
     * Returns the customer instance.
     * @return :Customer[]
     */
    get customers() {
        return this._customers;
    }
    /**
     * Adds a new customer to the branch.
     * @param customer The customer to add.
     * @returns True if the customer was added successfully, false if a customer with the same ID already exists.
     */
    addCustomer(customer) {
        let checkForDuplicateId = this._customers.find(entry => entry.id === customer.id);
        if (!checkForDuplicateId) {
            this._customers.push(customer);
            return true;
        }
        else {
            return false;
        }
    }
    /**
    * Adds a transaction to the account of a customer with the given ID.
    * @param id The ID of the customer to add the transaction to.
    * @param transection The transaction amount.
    * @returns True if the transaction was added successfully, false if the customer was not found or the transaction failed.
    */
    addCustomerTransactions(id, transection) {
        let getCustomer = this._customers.find(person => person.id === id);
        let transectionResult = getCustomer === null || getCustomer === void 0 ? void 0 : getCustomer.addTransactions(transection);
        if (transectionResult === undefined || transectionResult === false)
            return false;
        else
            return true;
    }
    /**
     * Finds a customer with the given ID in the branch.
     * @param id The ID of the customer to find.
     * @returns The customer with the given ID, or null if no customer was found.
     */
    findCustomer(id) {
        let getCustomer = this._customers.find(person => person.id === id);
        if (getCustomer)
            return getCustomer;
        else
            return null;
    }
}
exports.default = Branch;
