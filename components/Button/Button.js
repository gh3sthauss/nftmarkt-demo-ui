import React from "react";

function Button() {
  return (
    <button
      type="button"
      className={`relative overflow-hidden select-none active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed transition-transform ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
