
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

