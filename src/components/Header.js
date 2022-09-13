import downArrow from "../assets/images/downArrow.png";
import logo from "../assets/logos/logo.png";
import profile from "../assets/images/profile.jpg";

const Header = () => {
  const headerButtonsTitles = ["Standards", "Surveys", "data"];
  return (
    <div className="navbar bg-headerBlue">
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>

      <div className="nav-buttons">
        {headerButtonsTitles.map((title, index) => (
          <div key={index} className="nav-button">
            <h4 className="text-white">{title}</h4>
            <div className="downIcon">
              <img src={downArrow} alt="" />
            </div>
          </div>
        ))}
      </div>

      <div className="user-container mr-5 w-56 h-16 flex justify-evenly items-center flex-row">
        <div className="profile-pic w-10 h-10 rounded-full flex justify-center items-center ">
          <img className="rounded-full w-full h-full" src={profile} alt="" />
        </div>
        <div className="name-field h-10 w-32">
          <div className="text-white text-sm">Samuel Arefeaynie</div>
          <div className="text-white text-xs">jebena.enveritas.org</div>
        </div>
        <img className="w-3 h-2" src={downArrow} alt="" />
      </div>
    </div>
  );
};

export default Header;
