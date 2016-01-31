/* Ok, console logs are great, but lets actually make functions that do things. Create three functions, 
each taking in a single number. Then do something to that number and return a new number.
Then call each of those functions in one giant chain.
Example:
functionA(functionB(functionC( 2 ) ) ) ; 
Assuming that you set this up correctly, you should get a numerical return that is a combination 
of all the functions running, taking in a function in the place of a number. 
EVEN IF YOU GET THIS WORKING AND ARE UNSURE OF 'WHY' IT WORKS, thats OK. 
This is just showing you that you can use functions in place of many things. 
We will deep dive these concepts in class! Once you are complete, check it into a repo titled "prime_prestudy_bonus_week_03" */

function funcOne (a) {
	var triple = a * 3;
	return(triple);
}

function funcTwo (b) {
	var half = b / 2;
	return(half);
}

function funcThree (c) {
	var oneLess = c - 1;
	return(oneLess);
}

document.write(funcOne(funcTwo(funcThree(5))));
console.log(funcOne(funcTwo(funcThree(5))));