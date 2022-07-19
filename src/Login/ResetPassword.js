import resetimage from "./../images/reset.png";
function ResetPassword() {
  return (
    <main className="flex justify-around">
      <div className="relative grid content-center gap-3 pt-20">
        <input
          className="appearance-none block pl-[14px] w-60 bg-lightGray text-gray-700 border border-transparent rounded py-3  mb-3 leading-tight focus:outline-none"
          id="grid-first-name"
          type="password"
          placeholder="New password"
        />
        <input
          className="appearance-none block pl-[14px] w-60 bg-lightGray text-gray-700 border border-transparent rounded py-3  mb-3 leading-tight focus:outline-none"
          id="grid-first-name"
          type="password"
          placeholder="Confirm New Password"
        />
        <div className="relative flex justify-around">
          <button className="bg-blue text-white font-light py-2 px-20 rounded">
            RESET
          </button>
        </div>
      </div>
      <div className="pt-20 flex items-stretch">
        <img alt="welcome" className="h-96 w-auto" src={resetimage} />
      </div>
    </main>
  );
}

export default ResetPassword;
