import Customer from "./customer"

/**
 * Represents a bank branch with customers and transactions.
 * @constructor @param name: string
 * @param  name: string
 * @param customers: Customer[]
 */
class Branch {
    private _name: string
    private _customers: Customer[]
    constructor(name: string){
        this._name = name
        this._customers = []
    }

    /**
     * Returns the name of bank.     
     * @return :string
     */
    public get name(): string{
        return this._name
    }

    /**
     * Returns the customer instance.
     * @return :Customer[]
     */
    get customers(): Customer[]{
        return this._customers
    }

    /**
     * Adds a new customer to the branch.
     * @param customer The customer to add.
     * @returns True if the customer was added successfully, false if a customer with the same ID already exists.
     */
    addCustomer(customer: Customer): boolean{
        let checkForDuplicateId = this._customers.find(entry => entry.id === customer.id )
        if(!checkForDuplicateId){
            this._customers.push(customer)
            return true            
        } else {
            return false           
        }
    }

     /**
     * Adds a transaction to the account of a customer with the given ID.
     * @param id The ID of the customer to add the transaction to.
     * @param transection The transaction amount.
     * @returns True if the transaction was added successfully, false if the customer was not found or the transaction failed.
     */
    addCustomerTransactions(id: string,transection: number): boolean{
        let getCustomer = this._customers.find(person => person.id === id)
        let transectionResult = getCustomer?.addTransactions(transection)
        if(transectionResult === undefined || transectionResult === false ) return false
        else return true        
    }

    /**
     * Finds a customer with the given ID in the branch.
     * @param id The ID of the customer to find.
     * @returns The customer with the given ID, or null if no customer was found.
     */
    findCustomer(id: string): (null|Customer){
        let getCustomer = this._customers.find(person => person.id === id)
        if(getCustomer) return getCustomer
        else return null
    }

}

export default Branch;