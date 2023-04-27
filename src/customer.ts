import {v4 as uuidv4} from 'uuid';

/**
 * class Customer
 * @param @private _name: string
 * @param @private _id: string
 * @param @private _transections: Transection[]
 * @constructor @argument name: string
 * @method name @returns:string
 * @method id  @returns: string
 * @method transactions @returns: Transection[]
 * @method getBalance @returns: number
 * @method addTransaction @returns: boolean|Error
 */
class Customer {
    private _name: string
    private _id: string
    private _transections: Transection[]
    constructor(name: string) {
        this._name = name,
        this._id = uuidv4(),
        this._transections = []
    }

    /**
     * getter for customer name
     * @returns :string  //this._name 
     */
    get name(): string{ 
        return this._name
    }

    /**
     * getter for customer id
     * @returns : string   //this._id
     */
    get id(): string{ 
        return this._id
    }

    /**
     * getter for customer transections
     * @return : Transection[]  //this._transections
     */
    get transactions(): Transection[]{
        return this._transections
    }

    /**
     * counts all the transection amount and
     * @returns :number  //sum of all transections
     */
    getBalance(): number{
        let sumTransections = this._transections.reduce((previous,current) => previous + current.amount,0)
        return sumTransections
    }

    /**
     * check if transection list is empty &
     * if transection list length equal 0 or (transection list length not equal 0 and sum of transections is 0 or more) then
     * add newAmount to _transections  and return true
     * else throw low balance error
     * 
     * @param newAmount : number
     * @returns : boolean|Error
     */
    addTransactions(newAmount: number): boolean{
        if((this._transections.length === 0) || (this._transections.length !== 0 && ((this._transections.reduce((pre,curr) => pre +curr.amount,0)+ newAmount) >=0))) {
            let newTransection = {
                amount: newAmount,
                date: new Date()
            }
            this._transections.push(newTransection)
            return true            
        } else{
            return false
        }

    }

}


interface Transection {
    amount: number,
    date: Date

}

export default Customer;


