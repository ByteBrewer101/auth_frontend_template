import React from "react";

interface InputBoxProps {
   inputType : string; 
  label: string; // The label for the input box
  placeholder?: string; // The placeholder text for the input
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; // Change event handler
}

const InputBox: React.FC<InputBoxProps> = (props) => {
  return (
    <div>
      <p className="pb-2 text-white">{props.label}</p>
      <input
        type={props.inputType}
        className="w-full p-4 mb-2 rounded-xl bg-white text-white bg-opacity-5"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
};

export default InputBox;
