interface Teacher{
    firstName: string;
    lastName: string;
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

interface Directors extends Teacher{
    numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};


const director2: Directors = {
    firstName: "Sarah",
    lastName: "White",  
    location: "Chicago",
    fullTimeEmployee: true,
    numberOfReports: 25,
    yearsOfExperience: 10,
    favoriteSubject: "Science"
};

const director3: Directors = {
    firstName: "David",
    lastName: "Black",  
    location: "Miami",
    fullTimeEmployee: false,
    numberOfReports: 12,
    favoriteColor: "Green"
};

console.log(director1, director2, director3);


function printTeacher(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}. ${lastName}`;

}

console.log(printTeacher("John", "Doe"));