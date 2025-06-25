import React, { useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const SimpleTypeWriter = ({ words }) => {
  /* [reRender, setReRender] = useState(false); */
  const [text] = useTypewriter({
    words: words,
    typeSpeed: 70,
    delaySpeed: 1500,
  });

  /* console.log(Cursor); */
  return (
    <div>
      <h1 className="display">{text}</h1>
    </div>
  );
};
export default SimpleTypeWriter;
