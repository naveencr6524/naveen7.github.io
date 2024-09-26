//var//
function varExample() {
    var a = 10;
    console.log(a);
    if (true) {
        var a = 50;  
        console.log(a);  //it can be redeclared and reassign//
    }
    var a=20;
    console.log(a); 
}

varExample();

//let//
function letExample() {
    let b = 20;
    console.log(b); 
    if (true) {
        let b = 40; 
         b=30;                 //it cannot be redeclared but can reassign//
        console.log(b); 
    }

    console.log(b);
}

letExample();

//const//
function constExample() {
    const c = 30;
    console.log(c); 
    if (true) {
        const c = 60;      //it cannot be redeclared and reassign//
        console.log(c); 
    }

    console.log(c); 
}

constExample();

//data types//
var a = 10;
console.log(typeof a);

var b = "hello";
console.log(typeof b); 

var c = false;
console.log(typeof c); 

var d = null;
console.log(typeof d); 

var e;
console.log(typeof e); 

//synchronus//
function synchronus(){
  
    console.log("a")
    console.log("b")
    console.log("c")
}

synchronus();
// Output: 
// a
// b
// c

//asynchronus//
function asynchronus(){

    console.log("welcome")
    function Dream(){
        console.log("guys")
    }
     setTimeout(5000,Dream)
        
     
    console.log("everyone")
    console.log("allofus")
}

asynchronus();
// Output:
// welcome
// everyone
// allofus
// (after 5 seconds)
// guys
