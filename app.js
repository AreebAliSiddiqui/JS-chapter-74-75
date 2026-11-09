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

let student1 = new Student('Areeb',3080,90);
let student2 = new Student('Ali',3081,75);
let student3 = new Student('Usman',3082,85);

console.log(student1.showDetails());
console.log(student2.showDetails());
console.log(student3.showDetails());

console.log(student1.updateMarks(70));
console.log(student2.updateMarks(92));
console.log(student3.updateMarks(88));
