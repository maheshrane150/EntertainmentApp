import AuthLayout from "../components/userAndAuthentication/AuthLayout";
import Login from "../components/userAndAuthentication/Login";

function SignupPage() {
  return (
    <div>
      <AuthLayout>
        <Login />
      </AuthLayout>
    </div>
  );
}

export default SignupPage;
