import React from 'react';
import "./input.scss";

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