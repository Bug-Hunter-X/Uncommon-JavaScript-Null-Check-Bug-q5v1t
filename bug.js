function foo(a, b) {
  if (a === null || b === null) {
    return 0; //This will cause unintended behavior
  }
  return a + b;
}
console.log(foo(1,2)); //3
console.log(foo(null,2));//0
console.log(foo(1,null));//0