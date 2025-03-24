import Applayout from "../components/general/Applayout";
import UserAccount from "../components/userAndAuthentication/UserAccount";

function UserAccountPage() {
  return (
    <div className="">
      <Applayout>
        <div className="mt-8 flex justify-center md:justify-start ">
          <UserAccount />
        </div>
      </Applayout>
    </div>
  );
}

export default UserAccountPage;
