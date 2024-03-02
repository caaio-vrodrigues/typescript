// narrowing - verificar tipo
// verificar com uma condicional ou metodo qual é o tipo de dado da variavel ou demais fontes de dados
// exemplos abaixo em: 'narrowing' 

//---------------------------------------------------------------------------

// inferência
let n = 10;

//---------------------------------------------------------------------------

// anotação
let n2: number = 10;

//---------------------------------------------------------------------------

// tipos básicos
const firstName: string = 'Caio';
let age: number = 31;
let bool: boolean = true;

//---------------------------------------------------------------------------

// array
const arr: number[] = [1, 3, 5, 4];

//---------------------------------------------------------------------------

// array / tuplas
let myTuple: [number, string, string[]];
myTuple = [45, 'ola', ['aa', 'bb']];

//---------------------------------------------------------------------------

// array / generics
// permite qualquer valor
const showArrayItems1 = <T>(array: T[]) => 
  array.forEach(item => console.log(item));

function showArrayItems2<T> (array: T[]) {
  array.map(item => console.log(item));
};

// showArrayItems1(['oi', 3, 4, {}]);
// showArrayItems2(['olá', 5, 6, {}, []]);

//---------------------------------------------------------------------------

// objeto
const obj: {firstName: string, age: number} = {
  firstName: 'Caio',
  age: 31,
};

//---------------------------------------------------------------------------

// any
let y: any = null;
y = 'flor';

//---------------------------------------------------------------------------

// union type
let p: number | string = '';
p = 9;

//---------------------------------------------------------------------------

// type alias
type myAlias = number | number[];

let z: myAlias = [3, 4];

//---------------------------------------------------------------------------

// enum
enum Size {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande',
};

const camisa = {
  name: 'camisa teste',
  size: Size.M,
};

//---------------------------------------------------------------------------

// literal types - define valores a serem recebidos
let r: 'autenticado' | 'não reconhecido' | null | 0 | 1;
r = 'autenticado';

//---------------------------------------------------------------------------

// funções 
const teste = (a: number, b: number) => a + b;
teste(3, 4);

//---------------------------------------------------------------------------

// tipando parâmetro e retorno
function teste2 (msg: string): string {
  return msg;
};
teste2('Hello World!');

//---------------------------------------------------------------------------

// arrow
const teste3 = (msg: string): void => console.log(msg);
// teste3('Hello World!');

//---------------------------------------------------------------------------

// void - não retorna valor
const teste4 = (msg: string): void => {
  teste3(msg);
};

// teste4('Hello World! from teste4()');

//---------------------------------------------------------------------------

// narrowing
// parâmetro opcional
const teste5 = (firstName: string, lastName?: string) => 
  lastName ? `Hello ${firstName} ${lastName}.` : `Hello ${firstName}.`;

// console.log(teste5('Caio', 'Rodrigues'));
// console.log(teste5('Caio'));

//---------------------------------------------------------------------------

// narrowing
// typeof
const teste6 = (param: boolean | null) => {
  if(typeof param === 'boolean'){
    return 'É boolean.';
  };
  return 'É null.';
};
// console.log(teste6(true));

//---------------------------------------------------------------------------

// interface
interface interfaceTest {
  numA: number,
  numB: number,
};

const sumNumbers = (numbers: interfaceTest) => numbers.numA + numbers.numB;
// console.log(sumNumbers({numA: 9, numB: 3}));

const multiplyNumbers = (numbers: interfaceTest) => 
  numbers.numA * numbers.numB;
// console.log(multiplyNumbers({numA: 3, numB: 4}));

const g: interfaceTest = {
  numA: 10,
  numB: 21,
};
// console.log(sumNumbers(g));

//---------------------------------------------------------------------------

// classe
class User {
  name;
  lastName;
  age;
  y: string = 'teste aqui...';
  showMsg () {
    return `Hello ${this.name}`;
  };

  constructor(name: string, lastName: string, age: number){
    this.name = name,
    this.lastName = lastName,
    this.age = age
  };
};

const userCaio = new User('Caio', 'Rodrigues', 31);
// console.log(userCaio);
// console.log(userCaio.showMsg());
// console.log(userCaio.y)

//---------------------------------------------------------------------------

// classe com interface
interface IUserTest {
  name: string;
  lastName: string;
  age: number;
  getMsg(): void;
  getSum(numA: number, numB: number): number;
};

class UserTest implements IUserTest {
  name
  lastName
  age
  getMsg(): void {
    console.log(`Olá ${this.name} ${this.lastName}, sua idade é ${age} anos.`);
  }
  getSum(numA: number, numB: number): number {
    return numA + numB;
  }

  constructor(name: string, lastName: string, age: number){
    this.name = name,
    this.lastName = lastName,
    this.age = age
  };
};

const userA = new UserTest('Caio', 'Rodrigues', 31);
// userA.getMsg();
// console.log(userA.getSum(3, 4));

//---------------------------------------------------------------------------

// classe / herança
class UserTestHerança extends User {
  workOccupation;
  workMsg (): string{
    return `Meu nome é ${this.name} ${this.lastName} e minha profissão é ${this.workOccupation}.`;
  };

  constructor(name: string, lastName: string, age: number, workOccupation: string){
    super(name, lastName, age);
    this.workOccupation = workOccupation;
  };
};

const userM = new UserTestHerança('Miguel', 'Rodrigues', 44, 'Programador');
// console.log(userM.workMsg());

//---------------------------------------------------------------------------

// constructor decorator
function BaseParameters () {
  return function <T extends {new (...args: any): {} }>(constructor: T) {
    return class extends constructor {
      id = (Math.random() * 1000).toFixed();
      createdAt = new Date();
    };
  };
};

@BaseParameters()
class Person {
  name

  constructor(name: string){
    this.name = name;
  };
};

const personH = new Person('Caio Vinicius');
console.log(personH);
