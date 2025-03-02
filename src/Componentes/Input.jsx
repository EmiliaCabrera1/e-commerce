import React from "react";
import { twMerge } from "tailwind-merge";

const Input = React.forwardRef(
  ({ type, name, id, placeholder, error, ...rest }, ref) => (
    <div className="flex flex-col w-full mb-4 text-left mx-auto">
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        ref={ref}
        className={twMerge(
          "rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-2.5 text-lg bg-[#D9D9D933] w-full border-1",
          error ? "border-red-500" : "border-[#747272] bg-[#F8F8F8]"
        )}
        {...rest}
      />
      {error && (
        <span className="ml-2.5 text-red-500 text-sm mt-1">{error}</span>
      )}
    </div>
  )
);

export default Input;
