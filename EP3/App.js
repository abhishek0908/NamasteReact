import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//it create an object
// const heading  = React.createElement("h1",{id:"heading"},"Hello Namaste React")
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading)
// console.log;("this is react",heading)
// const jsxheading = <h1 id = "heading">Hello Namaste React</h1>
// console.log("This is jsx", jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
const Title = ()=>(
    <h1>Hello This is Title</h1>
)
const number=1000
 //Component composition
const HeadingComponent = ()=>(
    <div>
    <Title />
    {Title()}
    <h1>{number+1000}</h1>
     <h1> Hello Abhishek Udiya</h1>
    </div>
);
root.render(<HeadingComponent/>)