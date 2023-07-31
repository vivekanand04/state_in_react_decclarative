//method 1:: no any change in other file
// ye isliye kiya hai taki pta chale ki textDecoration:"line-through" kaam
//  kaise karta hai,,yha true false value dena padega

// import React from "react";
// function App(){
//   var isDone=true;//value fix so called declarative proramming
//   const strikeThrough={textDecoration:"line-through"};
//   return <p style={isDone?strikeThrough:null}>buy milk</p>;
// }
// export default App;

//method 2:: index.jsx me bhi change kiya hai
//ye exactly wahi kaam karega jo method 1 ne kiya tha

// import React from "react";
// function App(){
//   var isDone=false;//value fix so called declarative proramming
//   const strikeThrough={textDecoration:"line-through"};
//   return <p style={isDone?strikeThrough:null}>buy milk</p>;
// }
// export default App;
//

//method 3: jo question tha is video uska exact solution,,index.jsx me jo change kiya hai  hta do
// import React from "react";
// function strike() {
//   document.getElementById("root").style.textDecoration = "line-through";
// }
// function unstrike() {
//   document.getElementById("root").style.textDecoration = null;
// }
// function App() {
//   return (
//     <div>
//       <p> buy milk</p>
//       <button onClick={strike}>change to strike through</button>
//       <button onClick={unstrike}>change to back</button>
//     </div>
//   );
// }
// export default App;

// method 4:: method 3 ka upgraded part .,,app.js ke alawa koi aur folder me change nahi hua hai
import React from "react";

var isDone = false;

function strike() {
  isDone = true;
}

function unStrike() {
  isDone = false;
}

function App() {
  return (
    <div>
      <p style={isDone ? { textDecoration: "line-through" } : null}>Buy milk</p>
      <button onClick={strike}>Change to strike through</button>
      <button onClick={unStrike}>Change back</button>
    </div>
  );
}

export default App;
