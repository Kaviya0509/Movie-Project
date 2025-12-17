import React from 'react';
import "./Input.scss";

export function Input({
  type,
  className,
  placeholder,
  value,
  onChange,
  name,
  ...props
}) {
  return (
    <div>
      <input
        type={type}
        name={name}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}   // This forwards required, minLength, pattern etc.
      />
    </div>
  );
}