const num: number = 1;
const call: string = "Heather";
const isOpen: boolean = true;


// type personDT = {
//     name: string;
//     gender: string;
//     age: number;
//     occupation?: string;
// }

interface personDT  {
    name: string;
    gender: string;
    age: number;
    occupation?: string;
}

type Info = {
    height:string
}

let person:personDT & Info = {
  name: "heather",
  gender: "female",
  age: 21,
  height : '163cm'
};

const sum =(x:number,y:number):void => {
    console.log(x+y)
}

sum(1+1)