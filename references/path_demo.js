const path=require('path')

//get the Base filename
console.log(path.basename(__filename));

//directory name
console.log(path.dirname(__filename));

//fileExtension
console.log(path.extname(__filename));

//create path object
console.log(
    path.parse(__filename)
);
//concatenate path 

console.log(
    path.join(__dirname,'test','hello.html')
);
