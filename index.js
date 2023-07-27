console.log("Victoria ");

// const person=require('./person');
// //  console.log(person)
// const Person=require('./person');
// const person1=new Person('Ella Atieno', 5)
// person1.greetings()

const Logger=require('./logger');

const logger=new Logger();

logger.on('message',(data)=>console.log('Caller Listener:',data));

logger.log("Hello World");