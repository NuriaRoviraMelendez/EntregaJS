const students = [{
    age: 32,
    examScores: [],
    gender: 'male',
    name: 'edu'
  },
  {
    age: 29,
    examScores: [],
    gender: 'female',
    name: 'silvia'
  },
  {
    age: 26,
   examScores:[],
   gender: 'female',
   name: 'ana'
 },
 {
    age: 29,
   examScores:[],
   gender: 'male',
   name: 'victor'
 }]
/* Arrays filtrados por hombres y mujeres*/
let femaleStudents = students.filter(student => student.gender == "female");
let maleStudents = students.filter(student => student.gender == "male");
/* función Random number*/
function calculateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  } 
const availableMaleNames = ['pepe', 'juan', 'victor', 'Leo', 'francisco', 'carlos'];
const availableFemaleNames = ['cecilia', 'ana', 'luisa', 'silvia', 'isabel', 'virginia'];
const availableGenders = ['male', 'female'];
/* Ejercicio 1 */
  
console.table(students)

/* Ejercicio 2 */
console.log (students.length)

/* Ejercicio 3 */
students.forEach(student => console.log(student.name))

/* Ejercicio 4 */
let laststudent = students.pop()

/* Ejercicio 5 */
let randomNumber = calculateRandomNumber(0,students.length-1)
students.splice (randomNumber,1)
console.table (students)

/* Ejercicio 6 */
students.find(object=> {
    if (object.gender == 'female') {
        console.log(object)
    }
});

/* Ejercicio 7 */
const numberOfFemaleStudents = femaleStudents.length;
const numberOfMaleStudents = maleStudents.length;
const numberOfAllGenderStudents = numberOfMaleStudents + numberOfFemaleStudents;

  if (numberOfFemaleStudents > 1 || numberOfFemaleStudents == 0) {
    console.table([`En esta clase hay ${numberOfFemaleStudents} mujeres.`])
  } else {
    console.table([`En esta clase hay ${numberOfFemaleStudents} mujer.`])
  };
  if (numberOfMaleStudents > 1 || numberOfMaleStudents == 0) {
    console.table([`En esta clase hay ${numberOfMaleStudents} hombres.`])
  } else {
    console.table([`En esta clase hay ${numberOfMaleStudents} hombre.`])
  }

/* Ejercicio 8 */
function Women(students) {
  let fem = 0;
  students.forEach(object => {
    if (object.gender == 'female') {
      fem++;
    }
  });
  if(fem == students.length) {
    console.log(true);
  } else {
    console.log(false);
  }
}
Women(students);

/* Ejercicio 9 */
function TeenStudent(students) {
  students.forEach(object => {
    if(object.age > 20 && object.age < 25) {
      console.log(`Los nombres de los alumnos que tienen entre 20 y 25 años son: ${object.name}`);
    }
  });
}

TeenStudent(students);

/* Ejercicio 10 */



/* Ejercicio 13 */
function AverageAgeFemale(students) {
  let years = [];
  students.forEach(object => {
    if(object.gender == "female") {
      edad.push(object.age);
    }
  });
  //console.log(years);
  let sum = 0;
  for (let i = 0; i < years.length; i++){  
    sum = sum + years[i];
  }
  const average = sum/years.length;
  console.log(`La edad media de las chicas de la clase es ${average}`);
}

AverageAgeFemale(students);