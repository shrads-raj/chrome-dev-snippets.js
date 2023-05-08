debugger;
let x = 1;
{
  let x = 2; // Redeclaration of 'x'
  console.log(x); // Output: 2
    let x;
}
console.log(x); // Output: 1
