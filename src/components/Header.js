import logo from "../assets/logos/logo.png";
const Header = () => {
  return (
    <header>
      <div className="w-full h-16 bg-headerBlue flex flex-row justify-between items-center">
        <img src={logo} alt="" className="w-8 h-8 border-2 ml-5" />
        <div className=" ml-32 w-96 flex flex-row justify-center">
          <a
            href="true"
            className="w-40 text-center text-3xl text-white font-medium"
          >
            Surveys
          </a>
        </div>
        <div className="w-56 "></div>
      </div>
    </header>
  );
};

export default Header;
