"use strict";
//----------------------------------------Basic Types------------------------------------
//----------------------------------------Variable Declaration and Assignment------------------------------------
let a = "Anas"; // Assigning a string to the variable a
a = 2; // Reassigning a number to the variable a
console.log(a); // Output: 2
//----------------------------------------Function Declaration------------------------------------
const func1 = (a, b) => "Anas";
const func2 = (a, b) => "sa";
//----------------------------------------Array Types------------------------------------
const arr = [1, 2, 3, 4]; // Array of numbers
const arr2 = [1, 2, 3, "S", 4]; // Array of numbers or strings
//----------------------------------------Object Declaration and Assignment------------------------------------
const obj = {
    name: "Anas",
    height: 178,
    // weight: 56
};
const obj2 = {
    name: "Anas",
    height: 178,
    weight: 56,
    aukaat: "s",
    func: (a, b) => "kk"
};
const func3 = (a, b, c = 1) => a * b * c;
console.log(func3(2, 3, 4));
console.log(func3(2, 3));
//----------------------------------------Function with rest parameters------------------------------------
const func4 = (a, ...b) => console.log(b);
func4(1, 2, 3, 4, 5, 6, 7);
//----------------------------------------Function with interface parameter------------------------------------
const funObj = (product) => 1;
console.log(funObj({
    name: "Anas",
    id: "1",
    price: 3,
    quant: 1
}));
//----------------------------------------Class example------------------------------------
class Car {
    // Constructor
    constructor(make, model, year, func) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.func = func;
    }
    // Method
    displayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}
// Create an instance of Car
const myCar = new Car("Toyota", "Camry", 2020, (a, b) => "@");
// Call method to display car info
myCar.displayInfo();
// Type guard function
function isBird(pet) {
    return pet.fly !== undefined;
}
// Function using the type guard
function move(pet) {
    if (isBird(pet)) {
        pet.fly();
        console.log("Pet is flying!");
    }
    else {
        pet.swim();
        console.log("Pet is swimming!");
    }
}
// Example usage
const myPet1 = {
    fly: () => console.log("Flying high!"),
};
const myPet2 = {
    swim: () => console.log("Swimming deep!"),
};
move(myPet1); // Output: Flying high! Pet is flying!
move(myPet2); // Output: Swimming deep! Pet is swimming!
const genFunc = (n, m) => {
    return { n, m };
};
genFunc(2, "3");
//----------------------------------------Generics Example------------------------------------
// Generic Function
function identity(arg) {
    return arg;
}
// Calling the generic function with different types
let output1 = identity("hello"); // output1 is of type string
let output2 = identity(123); // output2 is of type number
// Using type inference
let output3 = identity("hello"); // output3 is inferred as string
let output4 = identity(123); // output4 is inferred as number
// Creating instances of the generic interface
let pair1 = { key: 1, value: "one" };
let pair2 = { key: "two", value: true };
// Generic Class
class Box {
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
// Creating instances of the generic class
let box1 = new Box(10); // box1 is of type Box<number>
let box2 = new Box("Hello"); // box2 is of type Box<string>
// Accessing values from the generic class instances
console.log(box1.getValue()); // Output: 10
console.log(box2.getValue()); // Output: Hello
// Generic Function with constraint
function filterByKeyValue(arr, key, value) {
    return arr.filter(item => item[key] === value);
}
const people = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 35 }
];
const filteredPeople = filterByKeyValue(people, 'age', 30);
console.log(filteredPeople); // Output: [{ id: 1, name: "John", age: 30 }]
//----------------------------------------Aysynchronous TS Example------------------------------------
// Function that returns a Promise resolving after a specified time
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
// Asynchronous function using async/await
async function fetchData() {
    console.log("Fetching data...");
    await delay(2000); // Simulate fetching data asynchronously
    console.log("Data fetched!");
    return "Mock data";
}
// Function to demonstrate async/await
async function processData() {
    try {
        const data = await fetchData();
        console.log("Processing data:", data.toUpperCase());
    }
    catch (error) {
        console.error("Error processing data:", error);
    }
}
// Call the processData function
processData();
