// *Task 1: Student Management System*

function Student(name,rollNumber,marks){
    this.name = name;
    this.rollNumber = rollNumber;
    this.marks = marks;
}

Student.prototype.showDetails = function (){
    console.log(`Name: ${this.name} Roll number: ${this.rollNumber}
        marks: ${this.marks}`);
    
}

Student.prototype.updateMarks = function(){

}

let student1 = new Student('areeb',3080,90);
let student2 = new Student('Ali',3081,75);
let student3 = new Student('Usman',3082,85);

