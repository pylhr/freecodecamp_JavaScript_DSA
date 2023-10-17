let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = (fixRegex, "$3 $2 $1"); // Change this line
let result = str.replace(fixRegex, replaceText);