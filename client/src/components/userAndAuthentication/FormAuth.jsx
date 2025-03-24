import ButtonPrimary from "../general/ButtonPrimary";
import InputAuth from "./InputAuth";

// Form component for the authentication pages
function FormAuth({
  onSubmit,
  inputFields,
  buttonText,
  isLoading,
  register,
  errors,
}) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      {inputFields.map((field, index) => (
        <div key={index} className="relative ">
          <InputAuth fieldData={field} register={register} errors={errors} />
        </div>
      ))}

      <ButtonPrimary type="submit" isLoading={isLoading}>
        {buttonText}
      </ButtonPrimary>
    </form>
  );
}

export default FormAuth;
