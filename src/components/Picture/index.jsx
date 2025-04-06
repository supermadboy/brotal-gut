export default function Picture({ src, alt, className }) {
  return (
    <picture className={className}>
      <source media="(min-width:650px)" srcSet={`/images/${src}.jpg`} />

      <img src={`/images/${src}_mobile.jpg`} alt={alt} />
    </picture>
  );
}
