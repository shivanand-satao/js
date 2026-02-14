//primitive datatype --when yuo pass them they are passed by value 
// 7 types 
// string ,Number ,Boolena , null , undefined ,Symbol ,BigInt


// refrence tye datatype --non primitive datatye 

// array ,objects ,functions 


const id1=Symbol("123")
const id2=Symbol("123")
console.log(id1===id2)
console.log(id1)
console.log(id2)

const arr=[ "shiva","safalya"]
console.log(arr)

let obj={
    nae:"abc",
    class :"engg",
};
console.log(obj)
let a =function(){
    console.log("shiva");
}
a();

// all non primitive datatype will give you the "object as the result"
//also the function give the type function ,bascailly it is a object function ,considered as object git 

//-----------------------------------------

// stack memeory is onyl for primitive 
// heap mrmory is for object mean dfor non pimirtev datastype 

// normal workgin like the java ,

// stack store the referecnes in the heap and also the primiitve 

// whenever you obj1=obj2;
// then both refrences point to the same    