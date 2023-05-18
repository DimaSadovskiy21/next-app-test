import { usePathname } from "next/navigation";

import { LinkStyled, NavbarWrapper } from "./styles";
import { ROUTES } from "./constants";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavbarWrapper>
      <LinkStyled
        href={ROUTES.HOME}
        $isPathnameEqual={pathname === ROUTES.HOME}
      >
        Main
      </LinkStyled>
      <LinkStyled
        href={ROUTES.SETTINGS}
        $isPathnameEqual={pathname === ROUTES.SETTINGS}
      >
        Settings
      </LinkStyled>
      <LinkStyled
        href={ROUTES.WALLETS}
        $isPathnameEqual={pathname === ROUTES.WALLETS}
      >
        Wallets
      </LinkStyled>
    </NavbarWrapper>
  );
};

export default Navbar;
