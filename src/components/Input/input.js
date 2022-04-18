import { useEffect, useState } from "react";
import "./input.css"
export default function Input(props) {
  const [valid, setValid] = useState(true);
  const [value, setValue] = useState();
  const [required, setRequired] = useState(false)

  const name = props.name;
  useEffect(() => {}, [valid]);
  const handleChange = (e) => {
    if (e.target.type === "date" || props.type==="select"|| props.type==="month") {
      setValid(true);
      setValue(e.target.value);
      return;
    }
    if (props.regex) {
      var regex = new RegExp(props.regex);
      if (regex.test(e.target.value)) {
        setValid(true);
        setValue(e.target.value);
      } else {
        setValid(false);
        setValue(e.target.value);
      }
    }
  };
  useEffect(() => {
    if(props.required){
      setRequired(true)
    }
    else{
      setRequired(false)
    }
    if (props.handleForm) {
      props.handleForm(value, valid, name, props.required);
    }
  }, [value]);
  return (
    <div>
      <label
        className={`block text-gray-700 text-sm font-bold mb-2  ${required ? "required" : "" }`}
        htmlFor={props.id}
      >
        {props.label}
      </label>
      {props.type==="select" ? (
        <select
          className="shadow  border rounded w-full py-2 px-3  focus:outline-none focus:shadow-outline"
          id={props.id}
          placeholder={props.placeholder}
          type={props.type ? props.type : "text"}
          maxLength={props.maxlength}
          onChange={handleChange}
          required={props.required}
          value={undefined}
        >
          
          {props.options.map(element=>  <option value={element} key={element}>{element}</option>)}
        </select>
      ) : (
        <input
          className="shadow  border rounded w-full py-2 px-3  focus:outline-none focus:shadow-outline"
          id={props.id}
          placeholder={props.placeholder}
          type={props.type ? props.type : "text"}
          maxLength={props.maxlength}
          onChange={handleChange}
          required={props.required}
        />
      )}
      {valid ? (
   <></> 
      ) : (
        <p className="text-red-500 text-xs italic">{props.errorMessage}</p>
      )}

    </div>
  );
}
