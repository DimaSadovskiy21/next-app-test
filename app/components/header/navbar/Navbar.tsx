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
        prefetch={true}
      >
        Main
      </LinkStyled>
      <LinkStyled
        href={ROUTES.SETTINGS}
        $isPathnameEqual={pathname === ROUTES.SETTINGS}
        prefetch={true}
      >
        Settings
      </LinkStyled>
      <LinkStyled
        href={ROUTES.WALLETS}
        $isPathnameEqual={pathname === ROUTES.WALLETS}
        prefetch={true}
      >
        Wallets
      </LinkStyled>
    </NavbarWrapper>
  );
};

export default Navbar;
