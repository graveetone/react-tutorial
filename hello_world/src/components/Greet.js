import React from 'react' // always should be imported in component file

// function Greet() {
//     return (
//     <h1> Hello from graveetone </h1>
//     )
// }

// the above code can be replace with arrow function

const Greet = (props) => {
    return <h1> Hello from {props.name} </h1>
    }
// name export: in this case we have to specify exact name of component

// this component should be exported:

export default Greet;



// now it can be included in other files like that

// import Great from './components/Great.js' .js can be omitted