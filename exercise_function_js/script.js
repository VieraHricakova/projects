//táto funkcia berie pole, z ktorého vytvára nové pole bez vlastností "id" a "teamId". 

const myArray=[
    {id:1, title:"title1", teamId:"1", dateline:'2021-01-23'},
    {id:2, title:"title2", teamId:"2", dateline:'2022-01-23'},
    {id:3, title:"title3", teamId:"3", dateline:'2021-01-20'},
    {id:4, title:"title4", teamId:"4", dateline:'2021-05-23'}
  ];

  
  function myFunc () { 
  const myNewArray=[];
  myArray.forEach(function (element){
    const oneItem=Object.entries(element);
    const filteredOneItem=oneItem.filter(function([key]){
      return key !=="id" &&  key!== "teamId";
    });
    const newItem=Object.fromEntries(filteredOneItem);
    myNewArray.push(newItem);
    return newItem;
  }); return myNewArray;
  }
  console.log(myFunc())

 //táto funkcia zľučuje vlastnosti "title" a "dateline".
const arr=[]
 function mergeFunction () {
  myArray.forEach( function (elem, index){
    const item = myArray[index]
    const mergeItem=item.dateline + " " + item.title
    arr.push(mergeItem)
  }); return arr  
}
mergeFunction()
console.log(arr)

// táto funkcia zmení dátum na hodnotu, ktorá zodpovedá počtu milisekúnd od 1.1.1970
function dateChange () {
  const mlsecArray = [];
  myFunc().forEach(function (el) {
    const mlsec = new Date(el.dateline).valueOf();
    mlsecArray.push(mlsec);
  });
  return mlsecArray;
}
console.log(dateChange())

//  táto funkcia zmení dátum na hodnotu, ktorá zodpovedá počtu milisekúnd od 1.1.1970 a zároveň novú hodnotu priradí pôvodnému objektu
function mlsecMyArray(){
  let x=0
  myArray.forEach(function(el){
  let item=(new Date(el.dateline).valueOf())
  myArray[x].dateline=item
  x++
    })
  return myArray
  }
console.log (mlsecMyArray())

// táto funkcia zoradí dátumy (prevedené na počet milisekúnd) od najnižšieho po najvyšší
function dateSort () {
  return dateChange().sort() 
}
console.log(dateSort())

// táto funkcia prevedie hodnoty (zodpovedajúce počtu milisekúnd) na dátum
function dateChangeAgain() {
  const arr = [];
  dateSort().forEach(function (el) {
    arr.push(new Date(el));
  });
  return arr;
}
console.log(dateChangeAgain())
