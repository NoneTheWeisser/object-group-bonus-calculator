// Array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3,
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4,
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5,
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1,
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1,
  },
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// This function will calculate 1 employee's bonus!

function calculateIndividualEmployeeBonus(employee) {
  let bonusObject = {
    name: employee.name,
    bonusPercentage: 0,
    totalCompensation: 0,
    totalBonus: 0,
  }

  // review bonus
  if (employee.reviewRating === 3) {
    bonusObject.bonusPercentage += .04;
  } else if(employee.reviewRating === 4){
    bonusObject.bonusPercentage += .06;
  } else if(employee.reviewRating === 5){
    bonusObject.bonusPercentage += .1; 
    } 

 
  // seniority bonus
  if(Number(employee.employeeNumber) < 10000){
    bonusObject.bonusPercentage += .05; 
  }
  
  // high earner bonus
  if( Number.annualSalary > 65000){
    bonusObject.bonusPercentage -= .01; 
  }
  
  // cap between 0-13

  // calculate bonus, total comp
   bonusObject.totalBonus = Number(employee.annualSalary) * (bonusObject.bonusPercentage);
   bonusObject.totalCompensation = Number(employee.annualSalary) +  bonusObject.totalBonus;
  
  return bonusObject;
}
employees.forEach(e => {
  console.log(e.name)
  let result = calculateIndividualEmployeeBonus(e);
  console.log(result);
});


// Loop over each employee in the employees array
// and call the calculateIndividualEmployeeBonus function for each one

// Test cases - these are failing by default but should pass once you've written the function correctly
// You can write more test cases to test your function using the same format
const atticusResult = calculateIndividualEmployeeBonus(employees[0]);
console.log(
  'Atticus Test Results:',
  atticusResult.bonusPercentage === 0.09,
  atticusResult.totalBonus === 4230,
  atticusResult.totalCompensation === 51230
);

const jemResult = calculateIndividualEmployeeBonus(employees[1]);
console.log(
  'Jem Test Results:',
  jemResult.bonusPercentage === 0.06,
  jemResult.totalBonus === 3810,
  jemResult.totalCompensation === 67310
);
