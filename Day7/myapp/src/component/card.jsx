import React from "react";
import {AiOutlineHeart} from "react-icons/ai";
import {FaRegComment} from "react-icons/fa";
import {FiSend} from "react-icons/fi";
function Card({username,image}){
    return(
        <div>
            <h1>{"Asutosh"}</h1>
            <img 
                style={{width:"200px",height:"100px"}}
                src={"https://wallpapers.com/images/featured/rfshatrpfmx3mok7.jpg"} 
                alt="error"     
            />
            <div>
                <AiOutlineHeart/>
                <FaRegComment/>
                <FiSend/>
            </div>
        </div>
    )
}

export default  Card;