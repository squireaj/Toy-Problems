//Question 1: Write a function that will add the two arrays together. 

var arr1 = ["Kate", "Tim", "Sarah", "Kyle"]
var arr2 = ["Robenette", "Jackson", "Farson", "Rawsen"]

//Answer1

//Use forEach 

//Answer2

//Use for loop 
var arr2 = [2,4,6,3,1,7,5]

//Questions 2: return the first non repeated chacter in a string 

var str = 'sadfsdf sfsdlkje;lkfj';

var firstRepeated = function(exString) {
	for(var i = 0; i < exString.length; i++){
		if(exString.indexOf(exString[i]) === exString.lastIndexOf(exString[i])){
      return exString[i]
    }
	}
}

//Question 3: Write a function that takes in a string and returns the reverse of that string. 

function FirstReverse(str) { 
	var rev = [];
	var sep = str.split('');  
  		for(var i = sep.length; i >= 0; i--){
        	rev.push(sep[i])
        }
    rev = rev.join('');
  return rev;
         
}

//or 

function FirstReverse(str) { 
	return str.split('').reverse('').join('')         
}

//or 

function FirstReverse(str) { 
	var newString = str.split('').reverse('').join('')
	return newString;         
}

//or

function FirstReverse(str){
  var newString = '';
  for(var i = str.length -1; i >= 0; i--){
    newString += str[i];
  }
  return newString;
}

//Question 4: Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 



function LetterChanges(str) { 
		str = str.split('');
	
		var offArr = [];
		for(var i = 0; i < str.length; i++){
			if(str[i] !== "z"){
			offArr.push(str[i + 1]);
			}else{
				offArr.push("a")
			}
  		switch(offArr[i]) {
          case 'a': case 'e': case 'i': case 'o': case 'u':
            offArr[i] = offArr[i].toUpperCase();
        }
    }
         offArr = offArr.join('')
           return offArr;      
}
var alphabet = "abcdefghijklmnopqrstuvwxyz"
LetterChanges(alphabet)

//or

function LetterChanges(str) { 
  var res ="";
  var rev;
  for(var i=0; i<str.length; i++){
    if(str[i].search(/[a-z]|[A-Z]/)!=-1){
      if(str[i]!="z"&&"Z"){
      rev = String.fromCharCode(str[i].charCodeAt(0)+1);
      }else{
         rev = "a";
      }
      if(rev.search(/[aeiou]/gi)!=-1){
        rev = rev.toUpperCase();
      }
      res = res + rev;      
      
    }else{
      res = res + str[i];      
    }
    
    
  }

//Question 5: Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18. 

function FirstFactorial(num) { 
  var newNum = 1;
  
  for(var i = num; i > 0; i--){
  	newNum = newNum * i;
  }
 
  return newNum; 
         
}

FirstFactorial(5)

//Write a Function called simpleSymbols that takes in a string parameter and determines if it is an acceptable sequence by either returning the string true or false. The str parameter will be composed of + and = symbols with several letters between them (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol. So the string to the left would be false. The string will not be empty and will have at least one letter. 


var simpleSymbols = function(str){
  str = str.split('')
  console.log(str)
  for(var i = 0; i < str.length; i++){
    if(str[i].match(/[a-z]/gi)){
        if(str[i + 1] != "+" || str[i - 1] != "+"){
          return false
        }
      }
    }
    return true
}

simpleSymbols("+a+==+a+")

simpleSymbols("+a++===+b+c+b")

//Write a function that generates an array of integers of the Fibonacci sequence, up to i = 100. The Fibonacci sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers in the sequence are 0 and 1. Write a function to check if a given number is in the Fibonacci sequence, return "yes" if it is, if not return the string "no."





//Using the JavaScript language, have the function LongestWord(sen) takes the sen parameter being passed and returns the largest word in the string. If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assume sen will not be empty. 

var words = "this is a sample string"

var LongestWord = function(sen){
  sen = sen.split(' ')
  console.log(sen)
  returnArray = [];
  for(var i = sen.length - 1; i > 0; i--){
    if(sen[i].length > sen[i - 1].length){
      returnArray.push(sen[i])
    }
  }
  return returnArray
}

LongestWord(words)






























