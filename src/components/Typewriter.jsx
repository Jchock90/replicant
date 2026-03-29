import React, { useEffect, useState } from 'react';

const Typewriter = ({ word = 'REPLICANT', typingSpeed = 120 }) => {
  const [text, setText] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (text.length < word.length) {
      const timer = setTimeout(() => {
        setText(word.substring(0, text.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else {
      setDone(true);
    }
  }, [text, word, typingSpeed]);

  return (
    <span>
      {text}
      <span className={`cursor ${done ? 'blink' : ''}`}>|</span>
    </span>
  );
};

export default Typewriter;
