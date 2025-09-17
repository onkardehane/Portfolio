import React from 'react';

const AnimatedText = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  );
};

export default AnimatedText;
