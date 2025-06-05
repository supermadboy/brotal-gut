export default function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="blank"
      className="focus-visible:italic hover:italic focus-visible:font-serif hover:font-serif"
    >
      {children}
    </a>
  );
}
