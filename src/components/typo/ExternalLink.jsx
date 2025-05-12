export default function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="blank"
      className="focus:italic hover:italic focus:font-serif hover:font-serif"
    >
      {children}
    </a>
  );
}
