export default function NavbarConent({ toggled }) {
  return (
    <div
      className={`z-10 bg-primary transition-transform w-screen absolute h-dvh ${
        toggled ? "translate-x-0" : "translate-x-full hidden"
      }`}
    >
      a
    </div>
  );
}
