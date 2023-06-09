// import React from "react";
// function Card({image,username,address,onclick,buttonText}) {
//     return(
//         <div>
//             <img src="{image}" alt="err" />
//             <h3>{username}</h3>
//             <p>{address}</p>
//             <button onClick={onclick}>{buttonText}</button>
//         </div>
//     );
// }
// export default Card;


// import React from 'react';

// function Card({image,username,address,onclick,buttonText}){
//     return(
//         <div>
//             <img src="{image}" alt="error" />
//             <h3>{username}</h3>
//             <p>{address}</p>
//             <button onClick={onclick}>{buttonText}</button>
//         </div>
//     )
// }
// export default Card;







// PATCH OPERATION
// import React from "react";

// function Card1({ title, body, onClick }) {
//   return (
//     <div>
//       <h3>{title}</h3>
//       <p>{body}</p>
//       <button onClick={onClick}>Update</button>
//     </div>
//   );
// }

// export default Card1;



// PUT OPERATION
// import React from 'react';

// function Card1({ user, onClick }) {
//     return (
//       <div>
//         <h3>{user.title}</h3>
//         <p>{user.body}</p>
//         <button onClick={onClick}>Update</button>
//       </div>
//     );
//   }

// export default Card1;



// DELETE OPERATION
// import React from 'react';

// function Card({ user, onUpdate, onDelete }) {
//   return (
//     <div>
//       <h3>{user.title}</h3>
//       <p>{user.body}</p>
//       <button onClick={onUpdate}>Update</button>
//       <button onClick={onDelete}>Delete</button>
//     </div>
//   );
// }

// export default Card;

import React from "react";
function Card({image, title}){
    return(
        <div>
            <img src={image} alt="" />
            <h3>{title}</h3>
        </div>
    );
}

export default Card;