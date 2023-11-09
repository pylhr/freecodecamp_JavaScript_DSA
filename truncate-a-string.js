function truncateString(str, num) {
  let altStr= str;
  if(str.length>num){
    altStr =str.slice(0,num) + "...";
  }
  
  return altStr;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);