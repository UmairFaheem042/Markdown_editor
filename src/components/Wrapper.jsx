import React from "react";

const Wrapper = ({ label, children, onChangeTitle }) => {
  return (
    <div className="wrapper">
      {onChangeTitle ? (
        <header>
          <span>✏️</span>
          <input value={`${label}`} onChange={onChangeTitle} />
        </header>
      ) : (
        <header className="outputLabel">
          <span>🥏</span> <span>OUTPUT</span>
        </header>
      )}
      {}
      {children}
    </div>
  );
};

export default Wrapper;
