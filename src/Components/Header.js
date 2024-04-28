import React, { useState } from "react"
import { faBars,faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header=()=>{

  const [name,setName]=useState(faBars);
return <nav class="p-5 bg-white shadow md:flex md:items-center md:justify-between transition-all ease-in
 mix-blend-overlay">
<div class="flex justify-between items-center">
 
  <img class="h-10 inline" alt="HyggeX" src="https://res.cloudinary.com/do4vytmxm/image/upload/v1695803892/images/Logo_ev7w4u.png"></img>


  <span class=" text-3xl cursor-pointer md:hidden block">
    <FontAwesomeIcon  onClick={(e)=>{
      let list=document.querySelector('ul');
      let nav=document.querySelector('nav');
    e.preventDefault();
   
    
if(name===faBars)
{
 
 list.classList.add('top-[80px]');
 list.classList.add('opacity-100');
  list.classList.add('bg-blue-300');
 nav.classList.remove('shadow');
 nav.classList.add('h-96')
 
 
  setName(faClose)
 
  
}
else if(name===faClose)
{
 
  nav.classList.add('shadow');
 nav.classList.remove('h-96')
  list.classList.remove('top-[80px]');
  list.classList.remove('bg-opacity-100')
  list.classList.remove('bg-blue-300');
  
  setName(faBars)
 
}
  
    }}  icon={name}/>
  </span>
</div>
<ul class="md:flex md:items-center z-[-1] md:z-auto md:static absolute
bg-white w-full  md:w-auto md:py-0 py-4 md:pl-0 pl-7
 top-[-400px] transition-all ease-in
duration-500" >
  <li class="mx-4 my-6 md:my-0">
    <a href="#" class="text-xl text-black hover:text-gray-300 duration-500">Home</a>
  </li>
  <li class="mx-4 my-6 md:my-0">
    <a href="#" class="text-xl text-black hover:text-gray-300 duration-500">Flashcards</a>
  </li>
  <li class="mx-4 my-6 md:my-0">
    <a href="#" class="text-xl text-black hover:text-gray-300 duration-500">Contact</a>
  </li>
  <li class="mx-4 my-6 md:my-0">
    <a href="#" class="text-xl text-black hover:text-gray-300 duration-500">FAQ</a>
  </li>
  <button class="bg-blue-600 text-white font-[Poppins] duration-500
  px-6 py-2 mx-4 hover:bg-cyan-500 rounded-3xl">Login</button>
</ul>
</nav>
}
export default Header;
