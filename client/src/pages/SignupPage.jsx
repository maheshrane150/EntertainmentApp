import AuthLayout from "../components/userAndAuthentication/AuthLayout";
import Signup from "../components/userAndAuthentication/Signup";

function SignupPage() {
  return (
    <div>
      <AuthLayout>
        <Signup />
      </AuthLayout>
    </div>
  );
}

export default SignupPage;
