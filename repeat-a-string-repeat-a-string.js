function repeatStringNumTimes(str, num) {
  let updateStr="";
  for(let i=0;i<num;i++){
    updateStr+= str;
  }
  return updateStr;
}

repeatStringNumTimes("abc", 3);