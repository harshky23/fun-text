import React from 'react'
import fields from './mainPage.module.css'
import { MdSunny,MdDarkMode } from "react-icons/md";
import Operation from "../components/Operation"


function MainPage() {
  const {
    display,
    text,
    show,
    dark,
    handleChange,
    capital,
    countApple,
    charCount,
    apple,
    wordCount,
    clearAll
  } = Operation();

 

  return (
    <div className={ `h-screen ${ (dark) ? 'bg-slate-900' : 'bg-yellow-200'} `}>
    <button className={`fixed top-2 right-5 text-xl lg:text-2xl lg:top-5 lg:right-10 ${dark ? 'text-zinc-100' : 'text-black'}`} onClick={display} >{(!dark)? <MdDarkMode /> : <MdSunny/>}</button>
    <div className= {` flex justify-center text-4xl lg:text-5xl py-5 ${fields.heading} ${dark ? 'text-zinc-100' : 'text-black'}`}>
       <p>Fun Text</p> 
    </div>
    
    <div className=" mainContent flex justify-center ">
      <div className='w-3/4 lg:w-1/2'>
      <textarea value ={text}  onChange={handleChange} placeholder=" Enter the text" className= {`p-3 w-full h-80 rounded-lg ${!dark ? 'bg-zinc-100' : 'bg-gray-300'}`}>
        
        </textarea>
       { show ? (<p className={`text-right w-full ${dark ? 'text-zinc-100' : 'text-black'}`}>{countApple} Apples</p> ) : (<p className={`text-right w-full ${dark ? 'text-zinc-100' : 'text-black'}`}>{charCount()} Letters and {wordCount()} words</p>) }
      </div>
    </div>
    
    <div className={`text-slate-200 gap-6 mt-4 flex justify-center text-xl `}>
    <button className={` rounded-full lg:px-7 lg:py-2 px-4 py-1 text-base  ${!dark ? 'bg-red-400' : 'bg-red-900'}`} onClick={capital}>Capital</button>
    <button className={` rounded-full lg:px-7 lg:py-2 px-4 py-1 text-base ${!dark ? 'bg-red-400' : 'bg-red-900'}`} onClick={clearAll}>Clear</button>
    <button
        class={` rounded-full lg:px-7 lg:py-2 px-4 py-1 text-base  ${!dark ? 'bg-red-400' : 'bg-red-900'}`} 
        onClick={apple}
        title="click here if you have written apple in TextBox">
        🍎 Apple
      </button>
    </div>
    
    </div>
  )
}

export default MainPage