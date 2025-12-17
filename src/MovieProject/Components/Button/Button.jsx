import React from 'react';
import "./Button.scss";

 export function Button ({type,classname,onClick,text})  {
  return (
    <div>
        <button type={type} className={classname} onClick={onClick}>
            {text}
        </button>
    </div>
  );
}