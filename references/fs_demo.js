const fs = require('fs')
const path =require('path')

// //creaTE Folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if (err) throw err;
//     console.log('folder created')
// });


// //create and write to file
// fs.writeFile(path.join(__dirname,'/test','hello.txt'),"this is me",err=>{
//     if (err) throw err;
//     console.log('file created');
//     //append to a file 
//     fs.appendFile(path.join(__dirname,'/test','hello.txt'),"this 2",err=>{
//     if (err) throw err;
//     console.log('file created')
// });
    
// });

// //read file 
// fs.readFile(path.join(__dirname,'/test','hello.txt'),'utf8',(err,data)=>{
//     if (err) throw err;
//     console.log( data);
// })

//rename a file 
fs.rename(path.join(__dirname,'/test','hello.txt'),path.join(__dirname,'/test','helloworld.txt'),err=>{
    if (err) throw err;
    console.log("renamed....")

})