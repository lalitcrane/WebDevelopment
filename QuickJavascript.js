
Source - https://www.youtube.com/watch?v=_n8x8MhQo1k

Query Selectors for elements 
By Class
const myElements = document.querySelector('.myClass') ;
All Children - Use space syntax
const myElements = document.querySelector('.myClass a') ;
Direct Children - Use Karat Syntax
const myElements = document.querySelector('.myClass > div') ;


By ID
const myElements = document.querySelector('#myid') ;

All Matches
const allDivElements = document.querySelectorAll('div') ;

------------------------------------------------

Array Methods
const fruits = ['apple', 'orange', 'sitaphal'] ;
fruits.forEach(fruit => console.log(fruit)) ;

The powerful Array Method - reduce.
reduce can be used to achive sort, filter and map
reduce can take 4 inputs Syntax is given as 
arr.reduce(callback( accumulator, currentValue[, index[, array]] )[, initialValue])

Source
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const nums = [1,2,2] ;
sum = nums.reduce((a,v) => a+v ) ; // 5
sum = nums.reduce((a,v) => a+v, 10 ) ; // 15
Create Object using reduce
myObj = nums.reduce((a,v,) => {'myprop'+i, : v }) ;
myArray = nums.reduce((a,v,) => ['myprop'+v]) ;

---------------------------------
  
  Map Method: Syntax : array.map(function(currentValue, index, arr), thisValue)
Or 
let new_array = arr.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
Example:
const nums = [4,9,16];

const sqrtnums = nums.map(Math.sqrt) ; // returns [2,3,4]  // Uses External Function
let newnums = nums.map(x => x * 2 ); // returns [8,18,32]  // Using lambada Function

// On Query Selector
//  Source - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

let elems = document.querySelectorAll('select option:checked')
let values = Array.prototype.map.call(elems, function(obj) {
  return obj.value
})

// Object Creation Example

let kvArray = [{key: 1, value: 10}, 
               {key: 2, value: 20}, 
               {key: 3, value: 30}]

let reformattedArray = kvArray.map(obj => {
   let rObj = {}
   rObj[obj.key] = obj.value
   return rObj
})
// reformattedArray is now [{1: 10}, {2: 20}, {3: 30}], 

// kvArray is still: 
// [{key: 1, value: 10}, 
//  {key: 2, value: 20}, 
//  {key: 3, value: 30}]

-------------------------------------------------------
    
    
