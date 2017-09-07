// var rollDie = function () {
//     return Math.floor(1 + Math.random() * 6);
//   }
  
//   console.log(rollDie(1));  



//   Create a function called makeLoadedDie() which returns a 
//   function that when called, seems to generate random numbers 
//   between 1 and 6, but in fact returns numbers in a row from a hardcoded list.





  function makeLoadedDie() {
    var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  
   return function() {
       var result = list.shift()
       var newList = list.push(result)
       return result
     } 
  }
  
  var rollLoadedDie = makeLoadedDie();
  
  console.log(rollLoadedDie());  // 5
  console.log(rollLoadedDie());  // 4
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 1
  console.log(rollLoadedDie());  // 6
  console.log(rollLoadedDie());  // 4