import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { usePostUserLoginMutation } from "../../features/mediaApi";
import { setUserdata } from "../../features/userSlice";

import FormAuth from "./FormAuth";
import ChangeAuthLink from "./ChangeAuthLink";

function Login() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Input fields for the login form
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
  ];

  // Mutation to login the user From the MediaAPi
  const [postUserLogin, { isLoading }] = usePostUserLoginMutation();

  // Function to handle the form submission
  async function onSubmit(body) {
    try {
      const userData = await postUserLogin(body).unwrap();
      dispatch(setUserdata(userData));
      navigate("/");
      toast.success("User logged in successfully", { autoClose: 1000 });
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div className="bg-secondary xs:w-96 w-80 p-10 rounded-xl flex flex-col gap-4">
      <h1 className="text-3xl font-normal mb-6">Login</h1>
      <FormAuth
        inputFields={inputFields}
        onSubmit={handleSubmit(onSubmit)}
        buttonText="Login to your account"
        isLoading={isLoading}
        register={register}
        errors={errors}
      />
      <ChangeAuthLink toAuthType="signup" />
    </div>
  );
}
export default Login;
