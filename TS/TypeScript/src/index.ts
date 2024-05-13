//----------------------------------------Basic Types------------------------------------

type MyString = string;
type MyNumber = number;
type MyBoolean = boolean;

//----------------------------------------Union Types------------------------------------

type UserName = string | number;

//----------------------------------------Array Types------------------------------------

type ArrayType = Array<number>;

//----------------------------------------Function Types------------------------------------

type FuncType = (a: number, b: string) => string;

//----------------------------------------Object Types------------------------------------

type ObjType = {
    name: string;
    height: number;
    weight?: number;
};

//----------------------------------------Interface Types------------------------------------

interface ObjType2 {
    name: string;
    height: number;
    weight?: number;
}

interface newObjType extends ObjType2 {
    aukaat: string;
    func: FuncType;
}

//----------------------------------------Variable Declaration and Assignment------------------------------------

let a: UserName = "Anas"; // Assigning a string to the variable a
a = 2; // Reassigning a number to the variable a
console.log(a); // Output: 2

//----------------------------------------Function Declaration------------------------------------

const func1: FuncType = (a, b) => "Anas";
const func2: FuncType = (a, b) => "sa";

//----------------------------------------Array Types------------------------------------

const arr: number[] = [1, 2, 3, 4]; // Array of numbers
const arr2: Array<number | string> = [1, 2, 3, "S", 4]; // Array of numbers or strings

//----------------------------------------Object Declaration and Assignment------------------------------------

const obj: ObjType = {
    name: "Anas",
    height: 178,
    // weight: 56
};

const obj2: newObjType = {
    name: "Anas",
    height: 178,
    weight: 56,
    aukaat: "s",
    func: (a, b) => "kk"
};

//----------------------------------------Function with optional and default parameters------------------------------------

type func3Type = (a: number, b: number, c?: number) => number;
const func3: func3Type = (a, b, c = 1) => a * b * c;

console.log(func3(2, 3, 4));
console.log(func3(2, 3));

//----------------------------------------Function with rest parameters------------------------------------

const func4 = (a: number, ...b: number[]) => console.log(b);
func4(1, 2, 3, 4, 5, 6, 7);

//----------------------------------------Interface with readonly property------------------------------------

interface ProductInf {
    readonly id: string;
    name: string;
    price: number;
    quant: number;
}

//----------------------------------------Type alias for a function that takes ProductInf as parameter------------------------------------

type FunObjType = (product: ProductInf) => number;

//----------------------------------------Function with interface parameter------------------------------------

const funObj: FunObjType = (product) => 1;

console.log(funObj({
    name: "Anas",
    id: "1",
    price: 3,
    quant: 1
}));



//----------------------------------------Class example------------------------------------

class Car {
    // Properties
    private make: string;
    private model: string;
    private year: number;
    public func: FuncType;

    // Constructor
    constructor(make: string, model: string, year: number, func: FuncType) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.func = func;
    }

    // Method
    displayInfo(): void {
        console.log(`Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`);
    }
}

// Create an instance of Car
const myCar = new Car("Toyota", "Camry", 2020, (a, b): string => "@");

// Call method to display car info
myCar.displayInfo();







//----------------------------------------Type guard example------------------------------------

// Define a union type
type Bird = {
    fly: () => void;
};

type Fish = {
    swim: () => void;
};

type Pet = Bird | Fish;

// Type guard function
function isBird(pet: Pet): pet is Bird {
    return (pet as Bird).fly !== undefined;
}

// Function using the type guard
function move(pet: Pet): void {
    if (isBird(pet)) {
        pet.fly();
        console.log("Pet is flying!");
    } else {
        pet.swim();
        console.log("Pet is swimming!");
    }
}

// Example usage
const myPet1: Pet = {
    fly: () => console.log("Flying high!"),
};

const myPet2: Pet = {
    swim: () => console.log("Swimming deep!"),
};

move(myPet1); // Output: Flying high! Pet is flying!
move(myPet2); // Output: Swimming deep! Pet is swimming!







//----------------------------------------Utility Types------------------------------------

// Partial<T>: Constructs a type with all properties of T set to optional.
interface User { name: string; age: number; }
type PartialUser = Partial<User>; // Allows partial population of User properties.
   
// Required<T>: Constructs a type with all properties of T set to required.
interface PartialUserr { name?: string; age?: number; }
type RequiredUser = Required<PartialUserr>; // Ensures all properties of PartialUser are required.

// Readonly<T>: Constructs a type with all properties of T set to readonly.
interface User { name: string; age: number; }
type ReadonlyUser = Readonly<User>; // Makes all properties of User readonly.

// // Record<K, T>: Constructs a type with a set of properties K of type T.
// type Point = { x: number; y: number; };
// type PointRecord = Record<'origin' | 'destination', Point>; // Defines a record of Point for 'origin' and 'destination'.

// Pick<T, K>: Constructs a type by picking the set of properties K from T.
interface UserValType { name: string; age: number; email: string; }
type UserSubset = Pick<User, 'name' | 'age'>; // Extracts only 'name' and 'age' from User.

// Omit<T, K>: Constructs a type by omitting the set of properties K from T.
interface User { name: string; age: number; email: string; }
type UserWithoutEmail = Omit<User, 'email'>; // Excludes 'email' property from User.

// Exclude<T, U>: Exclude from T those types that are assignable to U.
type MyNumbers = Exclude<number | string, string>; // Excludes 'string' from the union.

// Extract<T, U>: Extract from T those types that are assignable to U.
type MyStrings = Extract<number | string, string>; // Extracts 'string' from the union.

// NonNullable<T>: Constructs a type by excluding null and undefined from T.
type NonNullableStrings = NonNullable<string | null | undefined>; // Excludes null and undefined from string union.

// ReturnType<T>: Extracts the return type of a function type.
type MyFunc = () => string;
type MyFuncReturnType = ReturnType<MyFunc>; // Extracts the return type of MyFunc.


const genFunc = <T, U>(n:T, m:U): object => {
    return {n,m};
}

genFunc<number, string>(2,"3");







//----------------------------------------Generics Example------------------------------------


// Generic Function
function identity<T>(arg: T): T {
    return arg;
}
// Calling the generic function with different types
let output1 = identity<string>("hello"); // output1 is of type string
let output2 = identity<number>(123); // output2 is of type number
// Using type inference
let output3 = identity("hello"); // output3 is inferred as string
let output4 = identity(123); // output4 is inferred as number



// Generic Interface
interface KeyValuePair<K, V> {
    key: K;
    value: V;
}
// Creating instances of the generic interface
let pair1: KeyValuePair<number, string> = { key: 1, value: "one" };
let pair2: KeyValuePair<string, boolean> = { key: "two", value: true };



// Generic Class
class Box<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}

// Creating instances of the generic class
let box1 = new Box<number>(10); // box1 is of type Box<number>
let box2 = new Box<string>("Hello"); // box2 is of type Box<string>

// Accessing values from the generic class instances
console.log(box1.getValue()); // Output: 10
console.log(box2.getValue()); // Output: Hello




// Generic Function with constraint
function filterByKeyValue<T, U extends keyof T>(arr: T[], key: U, value: T[U]): T[] {
    return arr.filter(item => item[key] === value);
}

// Example usage of filterByKeyValue function
interface Person {
    id: number;
    name: string;
    age: number;
}

const people: Person[] = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 35 }
];

const filteredPeople = filterByKeyValue(people, 'age', 30);
console.log(filteredPeople); // Output: [{ id: 1, name: "John", age: 30 }]







//----------------------------------------Aysynchronous TS ------------------------------------

// Function that returns a Promise resolving after a specified time
function delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Asynchronous function using async/await
async function fetchData(): Promise<string[]> {
    console.log("Fetching data...");
    await delay(2000); // Simulate fetching data asynchronously
    console.log("Data fetched!");
    return ["Mock","data"];
}

// Function to demonstrate async/await
async function processData(): Promise<void> {
    try {
        const data = await fetchData();
        // console.log("Processing data:", data.toUpperCase());
    } catch (error) {
        console.error("Error processing data:", error);
    }
}

// Call the processData function
processData();







//----------------------------------------Enums------------------------------------
//Allows us to define a set of named constants.....
//The concept behind enums is just to create a more human-readable way to represent a set of constant values, which otherwise can be represented as strings or numbers..




// Define an enum for days of the week
enum DaysOfWeek {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  
  // Usage of enum
  const today: DaysOfWeek = DaysOfWeek.Wednesday;
  console.log('Today is', DaysOfWeek[today]); // Output: Today is Wednesday
  
  // Enums can also have string values
  enum Direction {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
  }
  
  // Usage of string enum
  const direction: Direction = Direction.Left;
  console.log('Direction is', direction); // Output: Direction is LEFT
  

