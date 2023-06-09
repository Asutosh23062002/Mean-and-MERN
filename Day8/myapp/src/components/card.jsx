// import React from 'react';
// import { useState } from 'react';

// function Card() {
//     const [change,setChange]=useState("");
//     const handleClick=()=>{
//         setChange(!change);
//     }
//     console.log(change);
//     return(
//         <div>
//             {change==="" ? <h1>Cards</h1> :<h1>Card Changed</h1> }
            
//             <button onClick={handleClick}>Click Me</button>
//         </div>
//     )
// }
// export default Card;

// // we are using useState hook for changing the desgingn its the managanemnt technique;
import React from "react";
// import { useState } from "react";


function Card({name, image}){
    // const [change, setChange] = useState(false);
    // const handleClick = () => {
    //     setChange(true);    //To make the button change the h1 evrytime btn is pressed then make "setChange(!change)".
    // }


    // const [change,setChange] =useState(0);
    // const handleClick= () => {
    //     setChange(1);
    // }

    // const [change,setChange] =useState("");
    // const handleClick= () => {
    //     setChange({
    //         name: "ipsit"
    //     });   //setChange("ipsit");
    // }


    // const [obj,setObj] =useState([]);
    // const handleClick= () => {
    //     setObj([1,2,3,4]);
    // }


    // console.log(obj);

    // change === "" / change === false / change ===0
    return(
       <div>
         {/* {obj === [] ? <h1>Card</h1> : <h1>Card Changed</h1>}  
         <button onClick={handleClick}>Click me</button> */}

         <img width={"200px"} height={"100px"} src={image} alt="" />
         <h3>{name}</h3>
       </div>
    )
}

export default Card;