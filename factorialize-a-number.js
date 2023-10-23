function factorialize(num) {
  let result = 1;
  let i = 2;
  if( num ==0){
    result = 1;
  }
  else {
  do {
    result *= i;
    i++;
  } while (i <= num);
  }

  return result;
}

factorialize(5);