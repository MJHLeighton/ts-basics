// import core-js, so that promises can be transpiled into ES5 with polyfill
import 'core-js';

// variables in JS can be declared in different ways, scoping applys but we can cover that in more detail another time

// var is the old-school way of defining variables in JS, scoping applies but it's easy to mess up
// since you can redeclare and freely updated vars

// const is the more modern JS approach, to define something that should not change or
// something that you will amend the contents of e.g. an array should normally be a const
// constants cannot be redeclared or updated/reassigned, but you can push to arrays, clear them with the length property e.g. arr.length = 0; etc.
// you can still add properties to objects that are constants

// declare a constant as type number explicitly (often not necessary, implicit is OK for simple types):
const myNumberExplict: number = 0;
// implicit version
const myNumberImplicit = 0;

// cannot reassign consts, un-comment below line to see error from TS
// myNumberImplicit = 5;

// let is another modern JS approach, for variables that you want to redeclare
let myLetNumber = 0;

// you can re-assign a let, no error
myLetNumber = 5;

// standard function definition with TS typing
function add(param1: number, param2: number): number {
    return param1 + param2;
}

// each param has a type annotation, and there is a return type too (this helps when working as a team)
// without these annotations, you could pass any type and return any type, like in standard JS
// explicitly any type should typically be avoided e.g. param1: any

// if you don't want to return anything, use void return type
function myVoidFunction(param1: string, param2: number): void {
    // do stuff without a return
}

// simple types where implicit typing is fine:
const aBoolean = false;
const aString = '';
const aNumber = 0;

// some simple type examples below, where you should declare the type explictly:
// color is a string, but we want to initialase as null, so can be a string or null type
const color: string | null = null;
// array of strings, declared with an empty array, pushing in anything other than a string will result in an error
const arrayOfStrings: string[] = [];

// some examples of interfaces and their use:
// an interface for a vehicle, with some different expected properties and an optional one
interface Vehicle {
    wheels: number;
    seats: number;
    fuelType: 'Petrol' | 'Diesel' | 'Electric'; // this forces one of these strings as a type
    fancyRadio?: boolean // optional boolean property
}

// a function that returns a vehicle
function makeMeAVehicle(wheels: number, seats: number, fuelType: Vehicle['fuelType']): Vehicle {
    // you can access types from the interface with the array syntax used for fuelType above
    const newVehicle: Vehicle = {
        wheels: wheels,
        seats: seats,
        fuelType: fuelType
    };
    return newVehicle;
}

// it's worth noting that interfaces will not show up in the compiled code, they are just a mechanism
// to help you write clean code and enable errors to be caught earlier by setting you expectations