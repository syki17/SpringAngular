let found: boolean = true;
let grade: number = 88.6;
let firstName: string = "Jakub";
let lastName: string="Sykora";

// lets break it!
/*
found = 0;
grade = "A";
firstName = false;
*/

console.log(found);
console.log("The grade is "+grade);
console.log("Hi "+firstName + " "+lastName);

//use template string
console.log(`Hi ${firstName} ${lastName}`);