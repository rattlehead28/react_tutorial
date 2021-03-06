import React from "react";
import ReactDom from "react-dom";

// JSX rules
// return single element
// div / section / article or Fragment (<React.Fragment></React.Fragment> or <></>)
// use camelCase for html attribute
// className instead of class
// close every element
// formatting


function Greeting() {
  return (
    <div>
      <h1>For the Unity. For Darkseid.</h1>
    </div>
  );
}

// function Greeting(){
//     return React.createElement('div',{},
//     React.createElement('h1', {}, 'For the Unity. For Darkseid.')
//     )
// }

ReactDom.render(<Greeting />, document.getElementById("root"));
