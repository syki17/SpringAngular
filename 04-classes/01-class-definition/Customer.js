var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
//create and instance of class
var myCustomer = new Customer("Jakub", "Sykora");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
