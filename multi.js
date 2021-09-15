function isNumberOdd(number){  
  if(number % 2 === 0) {
    return true;
  } else {
     return false;
  }
}
  
function isNumberEvenn(number){
  if (number % 2 == 0){
    return "number is even";
  } else {
    return "number is odd";
  }   
}
  
function detail(number){
  if (number % 2 === 0){
      return `the number ${number} is even`;
  } else {
    return `the number ${number} is odd`;
  }  
}
