import Navbar from "./Navbar";

function Applayout({ children }) {
  return (
    <div className="relative ">
      {/* Fixed navbar component */}
      <div className="fixed md:inset-y-0 md:w-20 inset-x-0 z-50 md:p-4">
        <Navbar />
      </div>

      {/* Main content */}
      <main className="md:pl-24 px-3 md:px-0 py-20 md:py-4">{children}</main>
    </div>
  );
}

export default Applayout;
