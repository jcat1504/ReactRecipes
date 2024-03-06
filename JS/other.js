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
  

  // arrow functions = a concise way to write function expressions
//                                good for simple functions that you use only once
//                                (parameters) => some code

// ---------- EXAMPLE 1 ----------
const hello = (name, age) => {console.log(`Hello ${name}`)
console.log(`You are ${age} years old`)};

hello("Bro", 25);

// ---------- EXAMPLE 2 ----------
setTimeout(() => {console.log("Hello"); 
console.log("Goodbye");}, 3000);

// ---------- EXAMPLE 3 ----------               
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const evenNums = numbers.filter((element) => element % 2 === 0);
const oddNums = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(total);

//when to use arrow function?
// Lexical this: If you need to preserve the this context from the surrounding scope, especially 
//in event listeners or callback functions, arrow functions are preferred.
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  console.log(this); // Refers to the button element
});

async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData("https://api.example.com/data");

//context api example
const ThemeContext = createContext('light');

function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
}

function ChildComponent() {
  const { theme } = useContext(ThemeContext);

  return <div style={{ color: theme === 'light' ? 'black' : 'white' }}>Content</div>;
}

//this reference

function myFunc() {
  this.myVar = 0;
  setTimeout(
    () => { // this taken from surrounding, meaning myFunc here
      this.myVar++;
      console.log(this.myVar) // 1
    },
    0
  );
}

//promises async/await
async function fetchPosts() {
  try {
    const response = await fetch("/posts");
    const data = await response.json();
    console.log(data);
  } catch {
    console.error(error);
  }
}
//an older example would be...
fetch("/posts") 
  .then(response => response.json())
  .then(posts => console.log(posts));
  .catch(err => console.log(err));


  //asynchronous operation
  console.log("Start");

setTimeout(function() {
  console.log("Timeout callback");
}, 0);

// Simulate a long-running synchronous operation
function longRunningOperation() {
  let i = 0;
  while (i < 1000000000) {
    i++;
  }
}

longRunningOperation();

console.log("End");
