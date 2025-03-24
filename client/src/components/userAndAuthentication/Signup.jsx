import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { usePostUserSignupMutation } from "../../features/mediaApi";
import { setUserdata } from "../../features/userSlice";

import FormAuth from "./FormAuth";
import ChangeAuthLink from "./ChangeAuthLink";

function Signup() {
  const {
    handleSubmit,
    watch,
    register,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Input fields for the signup form
  const inputFields = [
    {
      name: "email",
      placeholder: "Email address",
      type: "text",
      validators: {
        required: { value: true, message: "Can't be empty" },
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
          message: "Invalid email address",
        },
      },
    },
    {
      name: "password",
      placeholder: "Password",
      type: "text",
      validators: {
        required: { value: true, message: "Can't be empty" },
        minLength: { value: 8, message: "Min 8 chars" },
        maxLength: {
          value: 15,
          message: "Max 15 chars",
        },
      },
    },
    {
      name: "passwordConfirm",
      placeholder: "Repeat password",
      type: "text",
      validators: {
        required: { value: true, message: "Can't be empty" },
        validate: (value) => value === password || "Passwords do not match",
      },
    },
  ];

  // Mutation to signup the user From the MediaAPi
  const [postUserSignup, { isLoading }] = usePostUserSignupMutation();

  // Function to handle the form submission
  async function onSubmit(body) {
    try {
      const userData = await postUserSignup(body).unwrap();
      dispatch(setUserdata(userData));
      navigate("/");
      toast.success("Account created successfully", { autoClose: 1000 });
    } catch (error) {
      if (error.message.startsWith("Duplicate field")) {
        return toast.error("User is already registerd try logging in");
      }
      toast.error(error.message);
    }
  }

  return (
    <div className="bg-secondary xs:w-96 w-80 p-10 rounded-xl flex flex-col gap-4">
      <h1 className="text-3xl font-normal mb-6">Sign Up</h1>
      <FormAuth
        inputFields={inputFields}
        onSubmit={handleSubmit(onSubmit)}
        buttonText="Create an account"
        isLoading={isLoading}
        register={register}
        errors={errors}
      />
      <ChangeAuthLink toAuthType="login" />
    </div>
  );
}
export default Signup;
