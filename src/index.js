import React from "react";
import ReactDom from "react-dom";

// Nested Components, React Tools

function Greeting() {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

const Person = () => <h1>John Doe</h1>;
const Message = () => <p>this is my message</p>;

// function Greeting(){
//     return React.createElement('div',{},
//     React.createElement('h1', {}, 'For the Unity. For Darkseid.')
//     )
// }

ReactDom.render(<Greeting />, document.getElementById("root"));
