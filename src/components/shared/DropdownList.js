function DropdownList({ label, value, options, onChange }) {
  return (
    <>
      <div className=" text-left bg-theme-light-grey p-3 flex place-items-center">
        <label className="w-[20%] "> {label}</label>
        <div className="container w-[90%] ">
          <select
            value={value}
            onChange={onChange}
            className="w-[100%] p-2"
            name="boardStatus"
          >
            {options.map((option, index) => (
              <option
                key={index}
                value={option.value}
                className="bg-theme-grey"
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}

export default DropdownList;
