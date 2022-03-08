// if/if-else

let data=prompt("kolko mas rokov");
let result=data-18;
if (result>0) {
    console.log("si plnoletý")
}else if (result==0){
    console.log("len taktak")
}else{
    console.log("nemozes vstupit")
}

// --------------
arr=[1,2,3,4,5,6,7,8,9,10,11,12];
function myFunc(){
    for(let i=0;i<arr.length;i++){
        if (arr[i]<10 && arr[i]>5){
            console.log(arr[i]);
        }
    }
}
myFunc()

// ternary operator
let janaAge = 30;
let martinAge = 20;
console.log((janaAge == martinAge) ? "su narovnako" : "nie su narovnako");


//switch
let a=1;
let b=2;
let c=prompt("napis matematicke znamienko");
switch (c){
    case "+": 
   console.log(a+b);
   break;
   case "-":
   console.log(a-b);
    break;
    case ".":
   console.log(a*b);
    break;
    case "/":
   console.log(a/b);
    break;
   default:
       console.log("napisal si blbost");
    break;
}

//-------------
let age=18;
switch(true){
    case age>=18:
        console.log ("je dospely");
        break;
}

// for cyklus
for (var i=1;i<=10;i++){
    if(i==4){
        console.log("toto je cislo 4");
    }
    console.log(i)
}
    
//--------------
    var nahodneCisla=[-1,3,6,7,-4];
    var kladne=[];
    for(var i=0; i<nahodneCisla.length;i++){
        if (nahodneCisla[i]>0){
    kladne.push(nahodneCisla[i]);
    }
    }
    console.log(kladne);    

// forEach cyklus
    var Array=["teddybear","lollipop","car","doll"]
    Array.forEach(function(value,index){
    console.log("Toy number " + ++index + " is " + value + ".");
    })

// object
    const myDog={
        name:"Rex",
        toys: ["jedna hracka", "druha hracka"],
        print:function(){
            console.log(`${this.name} ma hracky: ${this.toys.join(" a ")}.`)
        }
    };
    myDog.print();

//zoradenie čísiel, otočenie odzadu a mocnina   
    arrayOfNumber=[3,5,4]
let arraySort=(arrayOfNumber.sort());
console.log(arraySort.reverse());

function pt(arr){
    let result=Math.pow(arr[0],2)===Math.pow(arr[1],2)+Math.pow(arr[2],2);
    return result;
};

console.log(pt(arraySort));