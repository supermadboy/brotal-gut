import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <MobileNavbar />

      <div className="justify-between hidden md:flex p-2 h-navbarHeightDesktop">
        <a
          href="#about-us"
          className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus:italic hover:font-serif focus:font-serif"
        >
          Home
        </a>

        <div className="flex gap-1">
          <a
            href="#about-us"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("about-us").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus:italic hover:font-serif focus:font-serif"
          >
            Über uns
          </a>
          <a
            href="#breads"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("breads").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus:italic hover:font-serif focus:font-serif"
          >
            Sortiment
          </a>
          <a
            href="#faq"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("faq").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus:italic hover:font-serif focus:font-serif"
          >
            FAQ
          </a>
          <Link
            to="/impressum"
            className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus:italic hover:font-serif focus:font-serif"
          >
            Impressum
          </Link>
        </div>
      </div>
    </div>
  );
}
