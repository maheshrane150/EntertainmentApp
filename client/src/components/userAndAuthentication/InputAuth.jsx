// Input component for authentication forms
function InputAuth({ fieldData, register, errors }) {
  const { type, name, validators, placeholder } = fieldData;

  return (
    <div>
      <input
        type={type}
        {...register(name, validators)}
        placeholder={placeholder}
        className={` w-full p-2 rounded-md bg-secondary outline-none border-b-2 ${errors?.[name] ? "border-red-600" : "border-white"} transition-all duration-200`}
      />
      {errors?.[name] && (
        <p className="text-red-600 font-semibold absolute right-0  text-sm bottom-2 ">
          {errors?.[name].message || "Invalid input"}
        </p>
      )}
    </div>
  );
}

export default InputAuth;
