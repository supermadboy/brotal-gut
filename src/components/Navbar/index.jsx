import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <MobileNavbar />

      <div className="justify-between hidden sm:flex p-2 bg-white h-navbarHeightDesktop">
        <a
          href="#about-us"
          className="bg-primary rounded-full text-3xl px-4 py-2"
        >
          Home
        </a>

        <div className="flex gap-1">
          <a
            href="#about-us"
            className="bg-primary rounded-full text-3xl px-4 py-2"
          >
            Über uns
          </a>
          <a
            href="#breads"
            className="bg-primary rounded-full text-3xl px-4 py-2"
          >
            Sortiment
          </a>
          <a href="#faq" className="bg-primary rounded-full text-3xl px-4 py-2">
            FAQ
          </a>
          <Link
            to="/impressum"
            className="bg-primary rounded-full text-3xl px-4 py-2"
          >
            Impressum
          </Link>
        </div>
      </div>
    </div>
  );
}
