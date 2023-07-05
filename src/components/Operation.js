import { useState } from "react";

function Operation() {
  let count = 0;
  let Chcount = 0;
  let i = 0;

  const [text, setText] = useState("");
  const [isCapital, setisCapital] = useState(false);
  const [show, setShow] = useState(false);
  const [dark, setDark] = useState(false);
  let [countApple, setCountApple] = useState(0);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const capital = () => {
    setisCapital(!isCapital);
    setText((previosText) => {
      return isCapital ? previosText.toLowerCase() : previosText.toUpperCase();
    });
  };

  const charCount = () => {
    Chcount = 0;
    for (i = 0; i < text.length; i++) {
      if (text[i] !== " ") Chcount++;
    }
    return Chcount;
  };

  const apple = () => {
    //  let array =[];
    //  array = text.split(" ");
    //  let final = "";
    //  for( i =0 ; i< array.length ; i++){
    //  if( array[i] === "apple" || array[i] === "Apple"){
    //     array[i] = '🍎';
    //     countApple++;

    //  }
    //  final = final +" "+ array[i];
    // }

   let easytxt = text.toLowerCase();
    const wordToReplace = "apple";
    const replacement = "🍎";
    const modifiedString = easytxt.replace(new RegExp(wordToReplace, "g"),replacement);
    setText(modifiedString);
    countApple =modifiedString.match(/🍎/g).length;
    setCountApple(countApple);
    // setText(final);
    setShow(true);
  };

  
  const wordCount = () => {
    count = 0;
    for (i = 0; i < text.length; i++) {
      if (text[i] === " " && text[i - 1] !== " ") count++;
    }
    return count;
  };

  const clearAll = () => {
    i = 0;
    count = 0;
    Chcount = 0;
    countApple = 0;
    setShow(false);
    setText("");
    setCountApple(0);
  };

  const display = () => {
    setDark(!dark);
  };

  return {
    display,
    text,
    isCapital,
    show,
    dark,
    handleChange,
    capital,
    charCount,
    apple,
    wordCount,
    countApple,
    clearAll,
  };
}

export default Operation;
