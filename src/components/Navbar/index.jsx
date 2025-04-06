import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex justify-between items-center bg-primary">
      <MobileNavbar />

      <div className="hidden sm:block">desktop bar</div>
    </div>
  );
}
