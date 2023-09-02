import  { useState, useEffect } from 'react';
import debounce from 'lodash/debounce';

interface InputProps {
    onChange: (e: string) => void;
    placeholder: string;
    type?: "text" | "number"
}

const Input = ({ onChange, placeholder, type = 'text' }: InputProps) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    const debouncedOnChange = debounce(onChange, 300);
    debouncedOnChange(value);

    return () => {
      debouncedOnChange.cancel();
    };
  }, [value, onChange]);

  const handleChange = (e: { target: { value: any; }; }) => {
    const { value: inputValue } = e.target;
    setValue(inputValue);
  };

  return (
    <input 
      className="input w-full border-1"
      type={type}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Input;
