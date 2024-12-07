function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Handle both being null
  } else if (a === null) {
    return b; //Use b if a is null
  } else if (b === null) {
    return a; //Use a if b is null
  }
  return a + b;
}
console.log(foo(1,2)); //3
console.log(foo(null,2));//2
console.log(foo(1,null));//1
console.log(foo(null, null));//0