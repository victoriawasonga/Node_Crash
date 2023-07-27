const os = require('os');

//platform
console.log(os.platform());

//CPU ARCHITECTURE
console.log(os.arch());

//cpu core info 
console.log(os.cpus());

//free memory in bytes 
console.log(os.freemem());

//Total memeory 
console.log(os.totalmem());

//Home dir
console.log(os.homedir());

//Uptime
console.log(os.uptime());