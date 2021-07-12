import logo from "../../images/logo-mini.png";
import { FaBars } from "react-icons/fa";
import { HeaderMain, ImgLogo, RightSpace } from "../../style";
import MenuMobile from "../MenuMobile";

import "./style.css";

function Header({
  handleShowHome,
  handleSignup,
  handleLogin,
  showMobile,
  handleMobile,
}) {
  return (
    <HeaderMain>
      <figure>
        <ImgLogo src={logo} alt="" />
      </figure>
      <RightSpace>
        <FaBars
          className="mobile"
          onClick={handleMobile}
          size={26}
          color={"white"}
        />
        {showMobile ? (
          <MenuMobile
            handleShowHome={handleShowHome}
            handleSignup={handleSignup}
            handleLogin={handleLogin}
          />
        ) : (
          <></>
        )}
      </RightSpace>
    </HeaderMain>
  );
}

export default Header;
