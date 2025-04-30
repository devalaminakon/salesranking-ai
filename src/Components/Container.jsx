import React from 'react'; // We'll create this CSS file next

const Container = ({ children, className = '' }) => {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
};

export default Container;