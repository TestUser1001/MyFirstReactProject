import React from "react";
import { useTypewriter } from "react-simple-typewriter";

const SimpleTypeWriter = ({ words }) => {
  const [text] = useTypewriter({
    words: words,
    typeSpeed: 70,
    delaySpeed: 1500,
  });

  return (
    <div>
      <h1 className="display">{text}</h1>
    </div>
  );
};
export default SimpleTypeWriter;
