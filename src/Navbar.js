import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav className="p-5 flex justify-start md:justify-between" >
      <Link to={`/`}><h1 className="text-2xl font-bold">Backtick</h1></Link>
      <div className="flex justify-end gap-4">
      <Link to={`/Login`}>
          <button className="bg-transparent text-darkGray font-light py-2 px-4 ">
                   LOGIN
          </button>
     </Link>
      <div className="border-l border-indigo-600"></div>
      <Link to={`/Register`}>
          <button className="bg-blue text-white font-light py-2 px-4 rounded">
                  REGISTER
          </button>
      </Link>
      </div>
    </nav>
  );
}

export default Navbar;
