class Customer {

    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }

}

//create and instance of class
let myCustomer = new Customer("Jakub","Sykora");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);