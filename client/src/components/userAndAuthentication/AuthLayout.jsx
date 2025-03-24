import Logo from "../general/Logo";

// Layout for the authentication pages
function AuthLayout({ children }) {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="mx-auto flex flex-col items-center gap-14">
        <Logo />
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
