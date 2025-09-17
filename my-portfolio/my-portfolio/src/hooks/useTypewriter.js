import { useState, useEffect, useCallback } from 'react';

export const useTypewriter = (phrases, options = {}) => {
  const {
    typeSpeed = 100,
    deleteSpeed = 50,
    delayBetweenPhrases = 2000,
    loop = true,
  } = options;

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isComplete, setIsComplete] = useState(false);

  const typeNextCharacter = useCallback(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    setCurrentText(currentPhrase.substring(0, currentText.length + 1));
  }, [phrases, currentPhraseIndex, currentText]);

  const deleteCharacter = useCallback(() => {
    setCurrentText(currentText.substring(0, currentText.length - 1));
  }, [currentText]);

  const moveToNextPhrase = useCallback(() => {
    if (loop) {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else if (currentPhraseIndex < phrases.length - 1) {
      setCurrentPhraseIndex((prev) => prev + 1);
    } else {
      setIsComplete(true);
    }
    setIsTyping(true);
  }, [phrases.length, currentPhraseIndex, loop]);

  useEffect(() => {
    if (isComplete) return;

    let timeout;
    const currentPhrase = phrases[currentPhraseIndex];

    if (isTyping) {
      if (currentText.length < currentPhrase.length) {
        timeout = setTimeout(typeNextCharacter, typeSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delayBetweenPhrases);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(deleteCharacter, deleteSpeed);
      } else {
        moveToNextPhrase();
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    currentPhraseIndex,
    isTyping,
    isComplete,
    typeNextCharacter,
    deleteCharacter,
    moveToNextPhrase,
    typeSpeed,
    deleteSpeed,
    delayBetweenPhrases,
    phrases,
  ]);

  return {
    currentText,
    isTyping,
    isComplete,
    currentPhraseIndex,
  };
};
