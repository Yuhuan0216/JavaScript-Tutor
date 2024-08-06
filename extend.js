// x++ vs ++x

let counter = 1;
let a = ++counter; // (a => 2, counter => 2)

// 等價
let counter = 1;
counter = counter + 1;
let a = counter;


let counter = 1;
let a = counter++; // (a => 1, counter => 2)

// 等價
let counter = 1;
let a = counter;
counter = counter + 1;



if(value1) {

}
else if(value2) {

}
else {

}