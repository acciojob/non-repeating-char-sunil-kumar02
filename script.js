function firstNonRepeatedChar(str) {
	for(let i = 0; i<str.length; i++){
		for(int j=i+1 ; j<str.length;i++){
			if(str.charAT(i) =! str.charAT(j)){
				console.log(str.charAt(i));
			}
		}
	}
 // Write your code here
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
