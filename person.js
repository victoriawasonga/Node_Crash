// const person={
//     name:"Victoria Okumu",
//     age:31
// };
console.log(__dirname,__filename)
class Person{
    constructor(name,age){
        this.name=name;
        this.age = age;
    }
    greetings(){
        console.log(`My name is ${this.name} and am ${this.age}`)
    }
}
module.exports=Person