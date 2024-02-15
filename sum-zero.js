// checking sum zero   problem 01 
//  [-5,-4,-3,-2,-1, 0 , 1,2,3,4,5]   input  
const numbers = [-5,-4,-3,-2,-1, 0,1,2,3,4,]

const result = function getSumZero(numbers){
     for(number of numbers){
          for(let i = 1; i < numbers.length ; i++){
               if(number + numbers[i] == 0){
                    return [number , numbers[i]]
               }
               
          }
          
     }
     return "there are no sum zero pair "
}

console.log(result(numbers));