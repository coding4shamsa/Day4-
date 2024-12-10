//callbacks
function dispaly(result){
    console.log(result);
}

function add(num1, num2, mycallBack){
    let sum = num1+num2;
    mycallBack(sum);
}
add(10, 20, dispaly)

//anonymous function

let sum = function(x,y){
    return x+y;
   
}
console.log(sum(10,20));

(
    function(){
        console.log("Welcome shamsa cadeey");
    }
)();

setTimeout(function(){
    console.log("Hi, shamsa");
},2000);

//recursive function

function myFunction(num){
    console.log(num)
    num--;
    if(num>0){
        myFunction(num);
    }

}
myFunction(10);

//object
const person ={
    firsname: "shamsa",
    lastname: "abdullahi",
    age:22
}
console.log(typeof person);

const practice ={
    firsname: "shamsa",
    lastname: "abdullahi",
    age:22,
    company: {
        name: "hormuud",
        level: "high",
    }
}
console.log(practice.company.name);

//for in

const people = {
    firsname: "ayaan",
    lastname: "ALI",
    age:32,
}

for(let prop in people){
    console.log(prop +":"+ people[prop]);
}