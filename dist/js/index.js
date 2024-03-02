"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let n = 10;
let n2 = 10;
const firstName = 'Caio';
let age = 31;
let bool = true;
const arr = [1, 3, 5, 4];
let myTuple;
myTuple = [45, 'ola', ['aa', 'bb']];
const showArrayItems1 = (array) => array.forEach(item => console.log(item));
function showArrayItems2(array) {
    array.map(item => console.log(item));
}
;
const obj = {
    firstName: 'Caio',
    age: 31,
};
let y = null;
y = 'flor';
let p = '';
p = 9;
let z = [3, 4];
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
;
const camisa = {
    name: 'camisa teste',
    size: Size.M,
};
let r;
r = 'autenticado';
const teste = (a, b) => a + b;
teste(3, 4);
function teste2(msg) {
    return msg;
}
;
teste2('Hello World!');
const teste3 = (msg) => console.log(msg);
const teste4 = (msg) => {
    teste3(msg);
};
const teste5 = (firstName, lastName) => lastName ? `Hello ${firstName} ${lastName}.` : `Hello ${firstName}.`;
const teste6 = (param) => {
    if (typeof param === 'boolean') {
        return 'É boolean.';
    }
    ;
    return 'É null.';
};
;
const sumNumbers = (numbers) => numbers.numA + numbers.numB;
const multiplyNumbers = (numbers) => numbers.numA * numbers.numB;
const g = {
    numA: 10,
    numB: 21,
};
class User {
    name;
    lastName;
    age;
    y = 'teste aqui...';
    showMsg() {
        return `Hello ${this.name}`;
    }
    ;
    constructor(name, lastName, age) {
        this.name = name,
            this.lastName = lastName,
            this.age = age;
    }
    ;
}
;
const userCaio = new User('Caio', 'Rodrigues', 31);
;
class UserTest {
    name;
    lastName;
    age;
    getMsg() {
        console.log(`Olá ${this.name} ${this.lastName}, sua idade é ${age} anos.`);
    }
    getSum(numA, numB) {
        return numA + numB;
    }
    constructor(name, lastName, age) {
        this.name = name,
            this.lastName = lastName,
            this.age = age;
    }
    ;
}
;
const userA = new UserTest('Caio', 'Rodrigues', 31);
class UserTestHerança extends User {
    workOccupation;
    workMsg() {
        return `Meu nome é ${this.name} ${this.lastName} e minha profissão é ${this.workOccupation}.`;
    }
    ;
    constructor(name, lastName, age, workOccupation) {
        super(name, lastName, age);
        this.workOccupation = workOccupation;
    }
    ;
}
;
const userM = new UserTestHerança('Miguel', 'Rodrigues', 44, 'Programador');
function BaseParameters() {
    return function (constructor) {
        return class extends constructor {
            id = (Math.random() * 1000).toFixed();
            createdAt = new Date();
        };
    };
}
;
let Person = class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
};
Person = __decorate([
    BaseParameters()
], Person);
;
const personH = new Person('Caio Vinicius');
console.log(personH);
