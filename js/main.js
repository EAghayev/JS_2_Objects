
function Sum(arr,func){
    let sum=0;
    if(typeof func == "function"){
        for(let i=0;i<arr.length;i++){
            if(func(arr[i])){
                sum+=arr[i]
            }
        }
    }
   
    return sum
}

function CustomFilter(arr,func){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(func(arr[i])){
            newArr.push(arr[i])
        }
    }

    return newArr;
}


function IsEven(num){
    return num%2==0
}

function IsOdd(num){
    return num%2==1
}


let numbers = [45,13,10,45,34,14,5]


console.log(Sum(numbers,IsEven))
console.log(Sum(numbers,IsOdd))
console.log(Sum(numbers,function(n){return n%3==0}))
console.log(Sum(numbers,x=>x%5==0))
console.log(Sum(numbers,"Fdsfds"))

let car1 =  {
    brand:"Mercedes",
    model:"S500",
    price:55000
}

let car2 =  {
    brand:"Mercedes",
    model:"S500",
    price:55000
}

let group = {
    "telebe limit":4,
    name:"P201",
    students:[],
    add:function(std){
        // if(this.students.length<this.limit)
        //     this.students[this.students.length] = std
        // else {
        //     let result = confirm(`Groupda artiq ${this.limit} sayda telebe var! Limiti artiraqmi?`)
        //     if(result){
        //         this.limit++;
        //         this.students[this.students.length] = std
        //     }
        // }
    },
    getInfo:function(){
        return `Name: ${this.name} - Students count: ${this.students.length}`
    }
}

group.name = "P101"

group.add({name:"Hikmet",surname:"Abbasov"})
group.add({name:"Nergiz",surname:"Abbasova"})
group.add({name:"Qulu",surname:"Abbaszade"})
group.add({name:"Qulu1",surname:"Abbaszade"})
group.add({name:"Qulu2",surname:"Abbaszade"})



for (const std of group.students) {
    console.log(std.name)
}

console.log(group.getInfo())

console.log(group["telebe limit"])

for (const key in group) {
    console.log(`key: ${key} - value: ${group[key]}`)

}

class Human {
    constructor(name,surname,age){
        this.Name = name,
        this.Surname = surname,
        this.Age = age,
        this.getInfo = function(){
            return `FullName: ${this.Name} ${this.Surname} Age: ${this.Age}`
        }
    }
}

let human1 = new Human("Hikmet","Abbasov",56);
let human2 = new Human("Tofiq","Quliyev",46);


class Student extends Human{
    constructor(name,surname,age,groupNo){
        super(name,surname,age);
        this.GroupNo = groupNo
    }
}

console.log(human1)
console.log(human2)

let std1 = new Student("Nergiz","Abbaszade",55,"P555");
let std2 = new Student("Abbbas","Abbaszade",15,"P551");

std1.Gender=true;
delete std1["Name"]
delete std1["Surname"]
console.log(std1)
console.log(std2)


console.log("======================================================")

numbers = [45,10,43,10,55,550,14];

console.log(numbers.indexOf(10,2))

console.log(numbers.join("-"))

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.splice(1,2,"Alma");

fruits.unshift("Qarpiz")
console.log(fruits.toString())
console.log(fruits.shift())

let newFruits = fruits.slice(0)
console.log(newFruits.sort().reverse())


let students = [
    new Student("Nergiz","Abbaszade",55,"P555"),
    new Student("Nazim","Abbaszade",55,"P515"),
    new Student("Abbas","Abbaszade",15,"P555")
]


let newNumbers = numbers.map(x=>x*2);


students.forEach(x=>console.log(x.Name))

let studentNames = students.map(x=>`<li>${x.Name} ${x.Surname}</li>`);

console.log(studentNames.toString())

// newNumbers = numbers.filter(x=>x%2==0);
newNumbers = CustomFilter(numbers,x=>x%2==0);

let result = numbers.reduce(myFunction)


function myFunction(total, value) {
    return total + value;
  }


console.log(result)

console.log(newNumbers.toString())

console.log(numbers.every(x=>x%2==0))

console.log(numbers.find(x=>x==550))
console.log(numbers.findIndex(x=>x==550))




// TASK
console.log("====================================")

class Product{
    constructor(name,price){
        this.Name = name,
        this.Price = price
    }
}

class Store{
    constructor(){
        this.Products = [],
        this.TotalIncome=0,
        this.AddProduct = function(prod){
            if(this.Products.some(x=>x.Name == prod.Name))
                alert(`${prod.Name} adli product elave olunub!`)
            else
                this.Products[this.Products.length] = prod
        }
        this.Sell = function(name){
            var prod = this.Products.find(x=>x.Name==name);
            if(prod == undefined) alert(`${name} adli porduct yoxdur!`)
            else this.TotalIncome+=prod.Price
        }
    }
}

let store = new Store();
let productCount = prompt("Mehsul sayini daxil edin");

if(!isNaN(productCount)){
    productCount = Number(productCount)
}

for(let i=0;i<productCount;i++){
    let prName = prompt("name daxil et");

    let prPrice = prompt("price daxil et")
     prPrice = Number(prPrice)

    let prod = new Product(prName,prPrice)
    store.AddProduct(prod)
}


console.log(store.Products)