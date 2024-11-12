//console.log(a);
//var a; 
const a=12;

// Data types
function hello(){
    console.log ("hello")
}
function add(a,b){
    return (a+b);
}
hello();
const hello1=()=>console.log("hello1");
hello1();
const sum=add(34,54);
console.log("sum=",sum);


//Object Destructuring
const person={
    name:"pallavi",
    age:20,
    salary: 100034.50,
}
const {name,age,salary}=person;
console.log(age);

//Map

const map =new Map([
    ["Key","js"],
    [123,"java"],
    [234,456],
    ["lan1","Go"]
]);
console.log(map.get(123));
console.log(map.get("Key1"));
map.set("Key2","typescript"); 
console.log(map);

const num =[2,4,5,6,7,8,9];
const ah=num.filter((n)=>(n%2==0)).map((n)=>(n*3));
console.log(ah);
const c=num.filter((n)=>(n%2==0)).map((n)=>(n*3)).reduce((n,s)=>(n+s));
console.log(c)

//Promise
const mypromise = new Promise(
    (resolve,reject)=>{
        //resolve();
        reject("network error")
    }
);

mypromise.then(()=>{
console.log("ALL SET!");
}).catch((err)=>{
    console.log("Error is ",err);
}).finally(()=>{
    console.log("Executed finally")
});
