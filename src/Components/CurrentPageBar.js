import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const CurrentPageBar=()=>{
return <>
<h3 class="my-8 ml-10">
    <FontAwesomeIcon style={{color:"gray", marginRight:"0.2rem"}} icon={faHome}/>
    <FontAwesomeIcon style={{color:"darkblue", marginRight:"0.2rem"}} icon={faChevronRight}/>
    <span style={{color:"gray",marginRight:"0.2rem"}}>Flashcard</span>
    <FontAwesomeIcon style={{color:"darkblue", marginRight:"0.2rem"}} icon={faChevronRight}/>
    <span style={{color:"gray",marginRight:"0.2rem"}}>Mathematics</span>
    <FontAwesomeIcon  style={{color:"darkblue", marginRight:"0.2rem"}} icon={faChevronRight}/>
    <span style={{color:"darkblue",marginRight:"0.2rem"}}>Relation and Function</span>

</h3>
<span class="text-blue-700 ml-10 text-2xl font-bold">Relations and Functions ( Mathematics )</span>
</>
}

export default CurrentPageBar;