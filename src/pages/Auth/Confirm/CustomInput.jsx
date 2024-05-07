import { useField } from "formik";
import { useRef } from "react";

const InputField = ({ name, maxLength, ...rest }) => {
  const [field] = useField(name);
  const inputRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value.length >= maxLength) {
      // Move focus to the next input field
      inputRef.current.nextSibling.focus();
    } else if (value.length === 0) {
      // Move focus to the previous input field
      inputRef.current.previousSibling.focus();
    }

    field.onChange(e); // Update Formik field value
  };

  return <input {...field} {...rest} ref={inputRef} maxLength={maxLength} onChange={handleInputChange} />;
};

export default InputField