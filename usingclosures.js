// var rollDie = function () {
//     return Math.floor(1 + Math.random() * 6);
//   }
  
//   console.log(rollDie(1));  



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




  var countdownGenerator = function (x) {   
    return function () {
        if (x > 0) {
            console.log('T-minus ' + x + '...')
        } else if (x === 0) {
            console.log('Blast off!')
        } else {
            console.log('Rockets already gone, bub!')
        } 
       x--
    }
  };
  
  var countdown = countdownGenerator(3);
  countdown(); // T-minus 3...
  countdown(); // T-minus 2...
  countdown(); // T-minus 1...
  countdown(); // Blast Off!
  countdown(); // Rockets already gone, bub!
  countdown(); // Rockets already gone, bub!



