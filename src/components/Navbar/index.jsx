import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-10">
      <MobileNavbar />

      <div className="justify-between hidden md:flex p-2 h-navbarHeightDesktop md:p-7">
        <a
          href="#home"
          onClick={(event) => {
            event.preventDefault();
            document.getElementById("home").scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif hover:tracking-wider"
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
            className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif hover:tracking-wider"
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
            className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif hover:tracking-wider"
          >
            Backplan
          </a>
          <a
            href="#faq"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("faq").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif hover:tracking-wide"
          >
            FAQ
          </a>
          <a
            href="#contact"
            onClick={(event) => {
              event.preventDefault();
              document.getElementById("contact").scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="bg-primary rounded-full text-3xl px-4 py-2 hover:italic focus-visible:italic hover:font-serif focus-visible:font-serif hover:tracking-wide"
          >
            Kontakt
          </a>
        </div>
      </div>
    </div>
  );
}
