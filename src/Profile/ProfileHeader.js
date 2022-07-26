import coin from "./../images/coin.png";
import SignoutButton from "./../Login/SignoutButton";

export function ProfileHeader({ user }) {
  return (
    <div className="relative grid content-center gap-3 w-9/12 h-56 rounded-[20px] bg-yellow mx-auto">
      <div className="w-full flex justify-between">
        <img
          alt="profile"
          className="absolute h-36 left-6 bottom-[-25px] bg-white rounded-full ml-5 w-36 object-cover"
          src={user.image}
        />
        <h1 className="absolute left-52 bottom-5 text-[27px] font-bold text-white">{`${user.fname} ${user.lname}`}</h1>
        <div className="absolute right-6 top-5 py-2 px-4 h-10 rounded-[70px] bg-white text-coingray">
          <div className="flex justify-between">
            <h1 className="mr-1">{user.backtick}</h1>
            <img
              alt="profile"
              className="bg-white rounded-[100px] w-[25px]  h-[25px]"
              src={coin}
            />
          </div>
        </div>
      </div>
      <SignoutButton />
    </div>
  );
}
