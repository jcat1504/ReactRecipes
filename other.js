//lexical environment: the surrounding state – the local memory along with the lexical environment of its parent.
function x() {
    var a = 7
    function y() {
      console.log(a)
    }
    return y
  }
  
  var z = x()
  console.log(z) // [Function: y]
  z()
  //when x is invoked, y is returned.  y will search for variable a in parent function

  function createCounter() {
    let count = 0;
    return function increment() {
      count++;
      return count;
    };
  }
  
  const counter1 = createCounter();
  const counter2 = createCounter();
  
  console.log(counter1()); // 1
  console.log(counter1()); // 2
  console.log(counter2()); // 1
  
  // Both counter1 and counter2 have their own closures,
  // each maintaining their own independent count variable.
  