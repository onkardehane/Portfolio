import React from 'react';

const LoadingSpinner = ({ size = 'md', color = 'purple' }) => {
  const sizes = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12',
  };

  const colors = {
    purple: 'border-purple-500',
    blue: 'border-blue-500',
    white: 'border-white'
  };

  return (
    <div className={`animate-spin rounded-full border-b-2 ${sizes[size]} ${colors[color]}`} />
  );
};

export default LoadingSpinner;
