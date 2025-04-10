import { Link } from "react-router-dom";
import Insta from "../../images/insta";
import EmailLink from "../../typo/EmailLink";

export default function NavbarConent({ toggled, toggle }) {
  return (
    <div
      className={`z-10 bg-primary transition-transform w-screen absolute h-dvh text-2xl ${
        toggled ? "translate-x-0" : "translate-x-full hidden"
      }
      flex flex-col gap-4
      pt-16
      items-center
      `}
    >
      <a
        href="#about-us"
        className="hover:italic focus:italic hover:font-serif focus:font-serif"
        onClick={() => toggle(false)}
      >
        Über uns
      </a>
      <a
        href="#breads"
        className="hover:italic focus:italic hover:font-serif focus:font-serif"
        onClick={() => toggle(false)}
      >
        Sortiment
      </a>
      <a
        href="#faq"
        className="hover:italic focus:italic hover:font-serif focus:font-serif"
        onClick={() => toggle(false)}
      >
        FAQ
      </a>
      <Link to="/impressum">Impressum</Link>

      <div className="flex gap-4">
        <Insta />
        <EmailLink />
      </div>
    </div>
  );
}
