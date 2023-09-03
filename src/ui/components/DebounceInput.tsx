import { ChangeEvent, useEffect, useMemo } from "react";
import {debounce} from "lodash"; 

interface DebounceInputProps {
  type?: 'text' | 'number';
  placeholder: string;
  onChange: (val: string) => void;
}

const DebounceInput = ({ type = 'text', placeholder, onChange, }: DebounceInputProps) => {

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []); 

  const onKeyDown = (e: { key: any; target: any; } ) => {
    const { key, target } = e
    if (key === 'Enter') {
      onChange((target as HTMLInputElement).value)
    }
  }

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return <input type={type} placeholder={placeholder} onKeyDown={onKeyDown} onChange={debouncedResults} className="input w-full border-1" />;
}; 

export default DebounceInput