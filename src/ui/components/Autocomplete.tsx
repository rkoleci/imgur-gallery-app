import { memo, useRef, useState } from "react";
import classNames from "classnames";
import DebounceInput from "./DebounceInput";

type AutocompleteProps = {
  items: string[];
  onChange(val: string): void;
  onSelect(val: string): void;
};

const Autocomplete = ({ items, onChange, onSelect }: AutocompleteProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>()
  
  return (
    <div
      className={classNames({
        "dropdown w-full": true,
        "dropdown-open": open,
      })}
      ref={ref}
    >
      <DebounceInput
        onChange={onChange}
        placeholder="Type something.."
        value={selected}
      />
     {items.length > 0 && (
       <div className="dropdown-content bg-base-200 top-14 max-h-96 overflow-auto flex-col rounded-md">
       <ul
         className="menu menu-compact "
         style={{ width: ref.current?.clientWidth }}
       >
         {items.map((item, index) => {
           return (
             <li
               key={index}
               tabIndex={index + 1}
               onClick={() => {
                 setSelected(item)
                 onSelect(item);
                 setOpen(false);
               }}
               className="border-b border-b-base-content/10 w-full"
             >
               <button>{item}</button>
             </li>
           );
         })}
       </ul>
     </div>
     )}
    </div>
  );
};

export default memo(Autocomplete);
