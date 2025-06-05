import { Link } from "react-router-dom";
import Insta from "../../images/insta";
import EmailLink from "../../typo/EmailLink";

export default function NavbarConent({ toggled, toggle }) {
  return (
    <div
      className={`z-10 bg-primary transition-transform w-screen absolute h-dvh text-large ${
        toggled ? "translate-x-0" : "translate-x-full hidden"
      }
      flex flex-col gap-4
      pt-16
      items-center
      `}
    >
      <a
        href="#about-us"
        className="hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif"
        onClick={() => toggle(false)}
      >
        Über uns
      </a>
      <a
        href="#breads"
        className="hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif"
        onClick={() => toggle(false)}
      >
        Backplan
      </a>
      <a
        href="#faq"
        className="hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif"
        onClick={() => toggle(false)}
      >
        FAQ
      </a>
      <a
        href="#contact"
        className="hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif"
        onClick={() => toggle(false)}
      >
        Kontakt
      </a>
      <Link to="/impressum">Impressum</Link>

      <div className="flex gap-4 mt-8">
        <Insta />
        <EmailLink mail="info@brotalgut-konstanz.de" />
      </div>
    </div>
  );
}
