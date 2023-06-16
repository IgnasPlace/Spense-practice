const Header = () => {
  return (
    <div className="flex justify-center bg-my-light-grey">
      <div className="navbar px-5 py-6  max-w-6xl">
        <div className="navbar-start">
          <a className="cursor-pointer text-xl font-semibold">spense.</a>
        </div>

        <div className="hidden navbar-center gap-6 md:flex">
          <a className="cursor-pointer py-3">Business</a>
          <a className="cursor-pointer py-3">Pricing</a>
          <a className="cursor-pointer py-3">Features</a>
        </div>

        <div className="hidden navbar-end md:flex gap-6">
          <a className="cursor-pointer py-3">Login</a>
          <button className=" bg-black rounded-md py-3 text-white font-bold px-4 hover:bg-gray-700 duration-300">
            Get Started
          </button>
        </div>

        <div className="navbar-end md:hidden">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  // strokeLinecap="round"
                  // strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16M4"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 px-2 py-6 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Business</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Features</a>
              </li>
              <li className="mt-10">
                <a>Login</a>
              </li>
              <li>
                <a>Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
