interface Teacher{
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [key: string]: any;
}

const teacher1: Teacher = {
    firstName: "Emily",
    lastName: "Brown",
    fullTimeEmployee: true,
    yearsOfExperience: 5,
    location: "New York",
    contract: false,
    favoriteSubject: "Mathematics",
    favoriteColor: "Blue"
};

const teacher2: Teacher = {
    firstName: "Michael",
    lastName: "Green",      
    fullTimeEmployee: false,
    location: "Los Angeles",
    favoriteSubject: "History",
    favoriteColor: "Red"
};

const teacher3: Teacher = {
    firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Additional, unlisted attribute
  favoriteColor: 'blue', // Another arbitrary attribute
  yearsOfExperience: 5
};

console.log(teacher3);

interface Director extends Teacher{
    numberOfReports: number;
}

const director1: Director = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};


const director2: Director = {
    firstName: "Sarah",
    lastName: "White",  
    location: "Chicago",
    fullTimeEmployee: true,
    numberOfReports: 25,
    yearsOfExperience: 10,
    favoriteSubject: "Science"
};

const director3: Director = {
    firstName: "David",
    lastName: "Black",  
    location: "Miami",
    fullTimeEmployee: false,
    numberOfReports: 12,
    favoriteColor: "Green"
};

console.log(director1, director2, director3);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string{
    firstName = firstName.charAt(0).toUpperCase() 
    return `${firstName}. ${lastName}`; 
    } 
console.log(printTeacher({firstName:"John", lastName:"Doe"}));



// const printTeacher: printTeacherFunction = function (firstName, lastName) {
//   return `${firstName.charAt(0).toUpperCase()}. ${lastName}`;
// };


console.log(printTeacher({ firstName: "John", lastName: "Doe" }));


interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}


class StudentClass implements StudentClassInterface {

 constructor (public firstName: string,public lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    workOnHomework(): string{
        return `Currently working`;
    }

    displayName(): string{
        return this.firstName;
    }
}

const student = new StudentClass("John", "Doe");
console.log(student.displayName()); // Output: John
console.log(student.workOnHomework());