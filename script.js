
// VARIABLES & DATA TYPES


// 1. Name and data type
let name = "Abinesh";
console.log(typeof name);

// 2. Age and data type
let age = 22;
console.log(age);
console.log(typeof age);

// 3. Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);

// 4. Undefined
let value;
console.log(value);
console.log(typeof value);

// 5. Null
let data = null;
console.log(data);
console.log(typeof data);

// 6. Five different data types
let myName = "Abinesh";
let myAge = 22;
let status = true;
let test;
let empty = null;

console.log(myName);
console.log(myAge);
console.log(status);
console.log(test);
console.log(empty);

// 7. Qualification
let qualification = "B.E";
console.log(typeof qualification);

// 8. Salary
let salary = 25000;
console.log(typeof salary === "number");

// 9. String number and actual number
let numberString = "100";
let actualNumber = 100;

console.log(typeof numberString);
console.log(typeof actualNumber);

// 10. Personal details
let studentName = "Abinesh";
let studentAge = 22;
let studentQualification = "B.E";
let workingStatus = false;

console.log(studentName, typeof studentName);
console.log(studentAge, typeof studentAge);
console.log(studentQualification, typeof studentQualification);
console.log(workingStatus, typeof workingStatus);



// ARRAYS


// 11. Five fruits
let fruits = ["Apple", "Mango", "Banana", "Orange", "Grapes"];
console.log(fruits);

// 12. Five numbers - first element
let numbers = [10, 20, 30, 40, 50];
console.log(numbers[0]);

// 13. Six colors - third element
let colors = ["Red", "Blue", "Green", "Yellow", "Black", "White"];
console.log(colors[2]);

// 14. Five mobile brands - last element
let mobiles = ["Apple", "Samsung", "OnePlus", "Vivo", "Oppo"];
console.log(mobiles[mobiles.length - 1]);

// 15. Seven numbers - second-last element
let nums = [10, 20, 30, 40, 50, 60, 70];
console.log(nums[nums.length - 2]);

// 16. Favorite foods
let foods = ["Pizza", "Burger", "Biryani", "Dosa", "Fried Rice"];
console.log(foods[0]);
console.log(foods[2]);
console.log(foods[foods.length - 1]);

// 17. Five cricketers - fourth
let cricketers = ["Virat", "Dhoni", "Rohit", "Gill", "Bumrah"];
console.log(cricketers[3]);

// 18. Toys - last toy dynamically
let toys = ["Car", "Ball", "Robot", "Doll", "Blocks"];
console.log(toys[toys.length - 1]);

// 19. Ten values
let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(values[0]);
console.log(values[values.length - 1]);
console.log(values[values.length - 2]);

// 20. Fruits, toys and cricketer
let mixedArray = ["Apple", "Car", "Virat", "Mango", "Robot"];

console.log(mixedArray);
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);



// OBJECTS


// 21. Name, age and city
let person = {
    name: "Abinesh",
    age: 22,
    city: "Madurai"
};

console.log(person);

// 22. Name, qualification and company
let employee = {
    name: "Abinesh",
    qualification: "B.E",
    company: "ABC Company"
};

console.log(employee.company);

// 23. Object with fruits array
let fruitObject = {
    fruits: ["Apple", "Mango", "Banana"]
};

console.log(fruitObject.fruits[1]);

// 24. Object with toys array
let toyObject = {
    toys: ["Car", "Robot", "Ball", "Doll"]
};

console.log(toyObject.toys[toyObject.toys.length - 1]);

// 25. Cricketer and team
let cricket = {
    cricketer: "Virat Kohli",
    team: "India"
};

console.log(cricket.cricketer);

// 26. Fruit, toy and cricketer
let game = {
    fruitName: "Apple",
    toyName: "Car",
    cricketer: "Dhoni"
};

console.log(game.fruitName);
console.log(game.toyName);
console.log(game.cricketer);

// 27. Students and courses
let college = {
    students: ["Abinesh", "Arun", "Kumar"],
    courses: ["JavaScript", "React", "Node"]
};

console.log(college.students[0]);
console.log(college.courses[1]);

// 28. Mobile array
let mobileObject = {
    mobile: ["iPhone", "Samsung", "OnePlus", "Vivo"]
};

console.log(mobileObject.mobile[2]);

// 29. Employee details
let employeeDetails = {
    employeeName: "Abinesh",
    skills: ["HTML", "CSS", "JavaScript"],
    experience: 1
};

console.log(employeeDetails.skills[1]);

// 30. Personal information
let personalInfo = {
    name: "Abinesh",
    age: 22,
    city: "Madurai",
    qualification: "B.E"
};

console.log(personalInfo.name);
console.log(personalInfo.age);
console.log(personalInfo.qualification);



// ARITHMETIC OPERATORS


// 31. Arithmetic operations
let a = 20;
let b = 10;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 32. Remainder
let x = 15;
let y = 4;

console.log(x % y);

// 33. Power
console.log(2 ** 5);

// 34. All six arithmetic operations
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);
console.log(num1 ** num2);

// 35. Increase by 5 using +
let count = 10;
count = count + 5;

console.log(count);


// =========================
// INCREMENT & DECREMENT
// =========================

// 36. Pre-increment
let pre = 10;
console.log(++pre);

// 37. Post-increment
let post = 10;
console.log(post++);

// 38. Pre-decrement
let preDec = 20;
console.log(--preDec);

// 39. Post-decrement
let postDec = 20;
console.log(postDec--);

// 40. Pre vs Post increment
let first = 10;
let second = 10;

console.log(++first);  // Pre-increment
console.log(second++); // Post-increment

console.log(first);
console.log(second);



// ASSIGNMENT OPERATORS


// 41. +=
let p = 20;
let q = 10;

p += q;
console.log(p);

// 42. -=
let c = 50;
let d = 20;

c -= d;
console.log(c);

// 43. *=
let e = 10;
let f = 5;

e *= f;
console.log(e);

// 44. /=
let g = 100;
let h = 10;

g /= h;
console.log(g);

// 45. %=
let i = 25;
let j = 4;

i %= j;
console.log(i);



// COMPARISON, LOGICAL & TERNARY


// 46. Comparison operators
let n1 = 20;
let n2 = 10;

console.log(n1 < n2);
console.log(n1 > n2);
console.log(n1 <= n2);
console.log(n1 >= n2);

// 47. == and ===
let num = 10;
let str = "10";

console.log(num == str);   // true
console.log(num === str);  // false

// 48. Logical operators
let condition1 = 10 > 5;
let condition2 = 20 > 15;

console.log(condition1 && condition2);
console.log(condition1 || condition2);
console.log(!condition1);

// 49. Age eligibility using ternary
let userAge = 20;

let result = userAge >= 18 ? "Eligible" : "Not Eligible";

console.log(result);

// 50. Marks Pass or Fail
let marks = 75;

let result2 = marks >= 35 ? "Pass" : "Fail";

console.log(result2);