"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Bank {
    constructor(name) {
        this._name = name,
            this._branches = [];
    }
    /**
     * check uniqueness of branches
     * adds branches
     * @params branch: string
     * @returns booleans
     * */
    // ?????????branch type : Branch??????
    addBranch(branch) {
        let checkForDuplicateBranch = this._branches.find(bankBranch => bankBranch.name === branch.name);
        if (!checkForDuplicateBranch) {
            this._branches.push(branch);
            return true;
        }
        else
            return false;
    }
    /**
     *
     * @param branch
     * @param customer
     * @returns boolean
     */
    addCustomer(branch, customer) {
        let findBranch = this._branches.find(branchItem => branchItem.name === branch.name);
        let addCustomer = findBranch === null || findBranch === void 0 ? void 0 : findBranch.addCustomer(customer);
        if (addCustomer)
            return true;
        else
            return false;
    }
    /**
     *
     * @param branch
     * @param customerId
     * @param transection
     * @returns boolean
     */
    addCustomerTransaction(branch, customerId, transection) {
        let findBranch = this._branches.find(branchItem => branchItem.name === branch.name);
        let addTransaction = findBranch === null || findBranch === void 0 ? void 0 : findBranch.addCustomerTransactions(customerId, transection);
        if (addTransaction)
            return true;
        else
            return false;
    }
    /**
     *
     * @param branchSearch
     * @returns BranchName/null
     */
    findBranchByName(branchSearch) {
        let findBranch = this._branches.find(branchName => branchName.name === branchSearch);
        if (findBranch)
            return findBranch;
        else
            return null;
    }
    /**
     *
     * @return boolean
     */
    checkBranch(branch) {
        let findBranch = this._branches.find(branchName => branchName.name === branch.name);
        if (findBranch)
            return true;
        else
            return false;
    }
    listCustomers(branch, para2) {
        if (para2) {
            let findBranch = this._branches.find(branchName => branchName.name === branch.name);
            return findBranch === null || findBranch === void 0 ? void 0 : findBranch.customers;
        }
        else {
            let findBranch = this._branches.find(branchName => branchName.name === branch.name);
            if (findBranch)
                return true;
            else
                return false;
        }
    }
}
exports.default = Bank;
