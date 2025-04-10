import { useState } from "react";
import NavbarButton from "./NavbarButton";
import NavbarContent from "./NavbarContent";
import Logo from "../../images/Logo";

export default function MobileNavbar() {
  const [toggled, toggle] = useState(false);

  return (
    <div className="w-full h-navbarHeight relative bg-primary md:hidden">
      <div className="flex justify-between p-4">
        <div className="w-56">
          <Logo />
        </div>

        <NavbarButton toggle={toggle} toggled={toggled} />
      </div>

      <NavbarContent toggled={toggled} toggle={toggle} />
    </div>
  );
}
