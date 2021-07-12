import { Link, MenuItem, MenuList, MenuMain } from "../../style";

function MenuMobile({ handleSignup, handleLogin, handleShowHome }) {
  return (
    <MenuMain>
      <MenuList>
        <MenuItem>
          <Link onClick={handleShowHome}>Home</Link>
        </MenuItem>
        <MenuItem>
          <Link onClick={handleLogin}>Login</Link>
        </MenuItem>
        <MenuItem>
          <Link onClick={handleSignup}>SignUp</Link>
        </MenuItem>
      </MenuList>
    </MenuMain>
  );
}

export default MenuMobile;
