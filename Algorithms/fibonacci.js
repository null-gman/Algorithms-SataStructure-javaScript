/* Fibonacci_sequence */

/*
In mathematics, the Fibonacci sequence is a sequence in which each element is the 
sum of the two elements that precede it. Numbers that are part of the Fibonacci sequence are known 
as Fibonacci numbers, commonly denoted Fn . Many writers begin the sequence with 0 and 1,
although some authors start it from 1 and 1[1][2] and some (as did Fibonacci) from 1 and 2. 
Starting from 0 and 1, the sequence begins .

# on "Wikipedia"

*/
function fibonacci(){
    /* i used the closure functions to cache the large numbers of if i want a shorter
        number then "it cached!!!" then the program get the range from the cached array 
        to retun it without do all Mathematics operations .


       it must be more optomized sloushon but after testing it with "time" tool on linux i found :
            - for heavly implementation its very good 
            - for soft implementation its may be slower by A simple time difference
         
    */

    let res = [0,1]; //start point
    return function fun(num){
        num = Math.abs(num);
        if (isNaN(num) ) {
            throw new Error("num must be an number");
        }
        if (2 >= num) {
            return res;
        }
        if (res.length >= num) {
            return res.slice(0, num);
        }
        // console.log("array not cached"); //just to tell if the math runs or not
        for (let index = res.length; index < num; index++) {
            res[index] = ( res[index - 1] + res[index - 2] );
        }
        return res;
    }
};


function slow_fibonacci(num){

    let res = [0,1]; //start point
        num = Math.abs(num);
        if (isNaN(num) ) {
            throw new Error("num must be an number");
        }
        if (2 >= num) {
            return res;
        }
        for (let index = 2; index < num; index++) {
            res[index] = ( res[index - 1] + res[index - 2] );
        }

        return res;
};



let fun ;

fun = fibonacci();
console.log("====fast====");

// fun = slow_fibonacci;
// console.log("====slow====");

// console.log(fun(3));
// console.log(fun(2));
// console.log(fun(7));
// console.log(fun(17));


fun(3);
fun(2);
fun(1000);
fun(500);
fun(800);
fun(400);
fun(2000);
fun(1500)
fun(50000);
fun(23000);
fun(123000);
fun(1230);
fun(23334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);

fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(1500)
fun(50000);
fun(23000);
fun(123000);
fun(1230);
fun(23334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);

fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113334);
fun(21113339);
