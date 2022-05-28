//Remove vowels from strings

function shortcut(string){
    let vowels = ['a','e','i','o','u']
 return string.split('').filter(x=>!vowels.includes(x)).join('')
}
console.log(shortcut('Hello'));
console.log(shortcut('Goodbye'));
console.log(shortcut('Amazing'));
console.log(shortcut('Mitochondria'));

//CHALLENGE ON SPLICE

function cutArray(arr,n){
    return arr.slice(0,n)
}
console.log (cutArray([2,4,6,3,7], 3)[2,4,6])

//REVERSE STRING

function reverse (string){
   return string.split(' ').reverse().join(' ')
}
console.log(reverse('Hello World'));

//PRINT MULTIPLICATION TABLE

function multiTable(num){

    for (let i = 1; i<=num; i++){

       
       console.log(`${i} * ${num} = ${num * i}`);
     
    }
}
multiTable(5)