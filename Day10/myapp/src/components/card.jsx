// import React from "react";

// function Card({passenger,logo,title,country,trips}){
//     return(
//         <div>
//             <h1>{passenger}</h1>
//             <img src={logo} alt="err" />
//             <h3>{title}</h3>
//             <h3>{country}</h3>
//             <p>{trips}</p>
//         </div>
//     );
// }

// export default Card;
import React from "react";
function Card({userId,title,body}){
    return(
        <div>
            <h1>{userId}</h1>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    );
}

export default Card;