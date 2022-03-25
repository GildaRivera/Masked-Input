import { useEffect, useState } from "react";

export default function Input(props) {
  const [valid, setValid] = useState(true);
  const [value, setValue] = useState();
  useEffect(() => {}, [valid]);
  const handleChange = (e) => {
    if (props.regex) {
   
      var regex = new RegExp(props.regex);
      if (regex.test(e.target.value)) {
        setValid(true);
      } else {
        setValid(false);
      }
    }
  };
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={props.id}
      >
        {props.name}
      </label>

      <input
        className="shadow  border rounded w-full py-2 px-3  focus:outline-none focus:shadow-outline"
        id={props.id}
        placeholder={props.placeholder}
        type={props.type ? props.type : "text"}
        maxLength={props.maxlength}
        onChange={handleChange}
        required={props.required}
      />
      {valid ? <></> : <p className="text-red-500 text-xs italic">{props.errorMessage}</p>}
    </div>
  );
}
