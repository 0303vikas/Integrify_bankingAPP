import Branch from "./branch"
import Customer from "./customer"

class Bank {
    private _name: string
    private _branches: Branch[]
    constructor(name: string) {
        this._name = name,
        this._branches = []
    }

    /** 
     * check uniqueness of branches
     * adds branches 
     * @params branch: Branch
     * @returns booleans
     * */     
    addBranch(branch: Branch): boolean{
        let checkForDuplicateBranch = this._branches.find(bankBranch => bankBranch.name === branch.name )
        if(!checkForDuplicateBranch) {
            this._branches.push(branch)
            return true
        } else return false
    }

     /**
     * Add a customer to a specific branch
     * @param branch: Branch - the branch to which the customer will be added
     * @param customer: Customer - the customer to be added
     * @returns boolean - true if the customer was added, false if the branch was not found
     */
    addCustomer(branch: Branch, customer: Customer): boolean{
        let findBranch = this._branches.find(branchItem => branchItem.name === branch.name )
        let addCustomer = findBranch?.addCustomer(customer)
        if(addCustomer) return true
        else return false        
    }

    /**
     * Add a transaction to a specific customer in a specific branch
     * @param branch: Branch - the branch where the customer is located
     * @param customerId: string - the ID of the customer
     * @param transaction: number - the transaction amount to be added
     * @returns boolean - true if the transaction was added, false if the branch or customer was not found
     */
    addCustomerTransaction(branch: Branch,customerId: string,transection: number){
        let findBranch = this._branches.find(branchItem => branchItem.name === branch.name)
        let addTransaction = findBranch?.addCustomerTransactions(customerId,transection)
        if(addTransaction) return true
        else return false        
    }

   /**
     * Find a branch by its name
     * @param branchSearch: string - the name of the branch to search for
     * @returns Branch/null - the branch if found, null if not found
     */
    findBranchByName(branchSearch: string){
        let findBranch = this._branches.find(branchName => branchName.name === branchSearch)
        if(findBranch) return findBranch
        else return null        
    }

     /**
     * Check if a specific branch exists in the bank
     * @param branch: Branch - the branch to search for
     * @returns boolean - true if the branch exists, false if not found
     */
    checkBranch(branch: Branch){

        let findBranch = this._branches.find(branchName => branchName.name === branch.name)
        if(findBranch) return true
        else return false
    }

    /**
     * List all customers in a specific branch
     * @param branch: Branch - the branch to list customers from
     * @param para2: boolean - a parameter to toggle additional functionality (not clear from code)
     * @returns Customer[]/boolean - an array of customers if para
     */
    listCustomers(branch: Branch, para2: boolean){

        if(para2) {
            let findBranch = this._branches.find(branchName => branchName.name === branch.name)
            
            return findBranch?.customers          
             
        } 
        else {
            let findBranch = this._branches.find(branchName => branchName.name === branch.name)
            if(findBranch) return true
            else return false


        }

       
    }
    
}


export default Bank;

