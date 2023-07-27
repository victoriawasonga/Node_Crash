const url=require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

//serualized url
console.log(myUrl.href)

console.log(myUrl.toString())

//Host (root domain)
console.log(myUrl.host)
//Hostname(does not get port)
console.log(myUrl.hostname)
//pathname
console.log(myUrl.pathname)
//serialied query
console.log(myUrl.search)
//object 
console.log(myUrl.searchParams)
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams);

myUrl.searchParams.forEach((value,name)=>console.log(`${name}:${value}`));