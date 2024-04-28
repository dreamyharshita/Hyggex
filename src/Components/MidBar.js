import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const MidBar=()=>{
    return <div class="flex flex-row justify-between mx-7 mb-20">
    <div >
    <img style={{width:"10rem",height:"2rem"}}  src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png"></img>
    </div>
    <div class="flex flex-row items-center justify-between">
        <FontAwesomeIcon class="text-blue-900 h-7 w-7 text-xs mx-2" icon={faPlusCircle}/>
        <span class="text-blue-900 font-bold">Create Flashcard</span>
    </div>
    </div>
}

export default MidBar;