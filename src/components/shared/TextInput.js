function TextInput({
  type = "text",
  placeholder,
  value,
  name,
  twClass,
  handleChange,
  inputClass = "bg-light-grey"
}) {
  return (
    <div className={"input-container " + twClass}>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        className={inputClass}
      />
      <label
        className={value || type === "date" ? "filled" : undefined}
        htmlFor={name}
      >
        {placeholder}
      </label>
    </div>
  );
}

export default TextInput;
