import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Faq=()=>{
    return <div  class="ml-7">
    <div>
        <h1 class="font-bold text-blue-900 text-xl mb-4">FAQ</h1>
    </div>
    <div class="flex flex-col ">
        <span class="flex border-solid border-2 border-gray-400 p-2 rounded-xl mb-2 justify-between w-8/12 hover:bg-slate-200">Can education flashcards be used for all age groups?
        <FontAwesomeIcon icon={faSortDown}/></span>

        <span class="flex border-solid border-2 border-gray-400 p-2 rounded-xl mb-2 justify-between w-8/12  hover:bg-slate-200">How do education flashcards works?
        <FontAwesomeIcon icon={faSortDown}/></span>
        <span class="flex border-solid border-2 border-gray-400 p-2 rounded-xl mb-2 justify-between w-8/12  hover:bg-slate-200">Can education flashcards be used for test preparation?
        <FontAwesomeIcon icon={faSortDown}/></span>
    </div>
    </div>
}

export default Faq;