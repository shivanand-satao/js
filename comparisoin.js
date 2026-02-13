//there is differecne between comparision operator and equlaity check operrator


console.log(undefined==0)
console.log(undefined<0)
console.log(undefined>0)
//all will give you the false only 

console.log(null==0)
console.log(null<0)
console.log(null>0)
// this also give you the false only 

//this give you the true 
console.log(null>=0)


// strict check     === not only check the values but also check the datatype fo the variable 
console.log("2"===2)
console.log(2==2)