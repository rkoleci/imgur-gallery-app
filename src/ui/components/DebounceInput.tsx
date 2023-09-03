import { useEffect, useMemo } from "react";
import {debounce} from "lodash";

interface DebounceInputProps {
  type?: 'text' | 'number';
  placeholder: string;
  onChange: (val: string) => void;
  value?: string;
}

const DebounceInput = ({ type = 'text', placeholder, onChange,value }: DebounceInputProps) => {

  const handleChange = (e) => {
    onChange(e.target.value);
  };

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 300);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();
    };
  });

  return <input type={type} value={value} placeholder={placeholder} onChange={debouncedResults} className="input w-full border-1" />;
};

export default DebounceInput