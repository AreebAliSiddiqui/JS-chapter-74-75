// *Task 1: Student Management System*

function Student(name,rollNumber,marks){
    this.name = name;
    this.rollNumber = rollNumber;
    this.marks = marks;
}

Student.prototype.showDetails = function (){
    return `Name: ${this.name} - Roll number: ${this.rollNumber} - marks: ${this.marks}`;
    
}

Student.prototype.updateMarks = function(marks){
    return  this.marks = marks;
}

Student.prototype.age = 19;

let student1 = new Student('Areeb',3080,90);
let student2 = new Student('Ali',3081,75);
let student3 = new Student('Usman',3082,85);

console.log(student1.showDetails());
console.log(student2.showDetails());
console.log(student3.showDetails());

console.log(student1.updateMarks(70));
console.log(student2.updateMarks(92));
console.log(student3.updateMarks(88));

console.log("age" in student1);
console.log(student1.hasOwnProperty("age"));


// *Task 2: Property Checking*
console.log("name" in student1);
console.log("showDetails" in student1);
console.log(student1.hasOwnProperty("name"));
console.log(student1.hasOwnProperty("showDetails"));
console.log(typeof student1.showDetails);
console.log(typeof student2.marks);


// *Task 3: Prototype Practice*

Student.prototype.institute = "ABC School";
console.log(student1.institute);
console.log(student2.institute);
console.log(student3.institute);



console.log(Object.getPrototypeOf(student1));


