const arrayOfNumbers = [1,2,3,4,5,6,7,8,9,10,11] ;




function linearSearch(array , value){

    for (let index = 0; index < array.length; index++) {
        if (array[index] === value) {
            return index;
        }
        
    }
    return -1;
}


function binarySearch(array , target){
     let start  = 0
     let end = array.length;

     while (end >= start) {
        const half = Math.floor(((end-start)/2 + start));//test it above
        // const half = Math.floor((end+start)/2);//test it above
        // console.log(half);/*for debugging*/
        
        if (array[half] === target) {
            return half;
        }

        if (array[half] < target) {
            start = half + 1;
        }else{
            end = half - 1;
        }
     }

     return -1;
    
}


res = binarySearch(arrayOfNumbers,4);
console.log(res);

