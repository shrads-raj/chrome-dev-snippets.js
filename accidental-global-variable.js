debugger;
function foo(){
    let a=b=0;
    a++;
    return b;
}
foo();
console.log(typeof(b));
console.log(typeof(a));

// console.log(a);