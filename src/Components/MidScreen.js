import React,{useState} from "react";
import Card from "../UI/Card";
import { faLightbulb } from "@fortawesome/free-regular-svg-icons";
import { faVolumeUp,faRepeat,faChevronCircleLeft,faChevronCircleRight,faArrowsAlt, faRotate} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data=[
    {
        "id":1,
        "text":"9 + 6 + 7x - 2x + 3"
    },
    {
        "id":2,
        "text":"4 - 2 + 5y + 8"
    },
    {
        "id":3,
        "text":"9 * 2 + 4a - 1"
    },
    {
        "id":4,
        "text":"4x + 7 + 5y + 8"
    }
]




const MidScreen=()=>{

    const [number,updateNumber]=useState(0);
    const [text,updateText]=useState(data[0].text);
   
return <>
<ul class="flex items-center justify-center">
    <li class="flex items-center justify-center mx-2">
        <a class="mx-4 items-center  text-blue-900 font-medium  hover:cursor-pointer border-b-2 border-blue-900">Study</a>
        <a class=" text-gray-500 hover:text-black hover:cursor-pointer mx-4 items-center font-medium">Quiz</a>
        <a class="  text-gray-500  hover:text-black  hover:cursor-pointer mx-4 items-center font-medium">Test</a>
        <a class=" text-gray-500  hover:text-black  hover:cursor-pointer mx-4 items-center font-medium">Game</a>
        <a class=" text-gray-500  hover:text-black  hover:cursor-pointer mx-4 items-center font-medium">Others</a>
    </li>
    
</ul>
<div class="flex justify-between items-center flex-col ">
    <div >
<Card >
    <div class="flex justify-between">
        <FontAwesomeIcon  class="text-xs h-10 w-10 text-white" icon={faLightbulb}/>
        <FontAwesomeIcon  class="text-xs h-10 w-10 text-white" icon={faVolumeUp}/>
    </div>
    <div class="flex  justify-center items-center">
    <h1 class="justify-center mb-20 text-white text-2xl">{text}</h1>
    </div>
   
    </Card>
    </div>
  
    <div class="flex my-7 flex-row">

    <FontAwesomeIcon class="text-blue-900 h-7 w-7 text-xs mx-9" icon={faRepeat}/>
    <FontAwesomeIcon class="text-blue-900 h-7 w-7 text-xs mx-9" icon={faChevronCircleLeft} onClick={(event)=>{
     event.preventDefault();
 
     if(number>0){
        updateNumber(number-1);
       
        updateText(data[number].text);
    }
   
    
    }}/>
    <span>{number+1}/{data.length}</span>
    <FontAwesomeIcon class="text-blue-900 h-7 w-7 text-xs mx-9" onClick={(event)=>{
        event.preventDefault();
        if(number<data.length-1){
            updateNumber(number+1);
          
            updateText(data[number].text);
        }
        
        
    }} icon={faChevronCircleRight}/>
    <FontAwesomeIcon  style={{transform:"rotate(135deg)"}} class="text-blue-900 h-7 w-7 text-xs mx-9" icon={faArrowsAlt}/>

    </div>
    </div>
</>
}

export default MidScreen;