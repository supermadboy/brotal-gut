export default function Picture({ src, alt, className, id }) {
  return (
    <picture className={className} id={id}>
      <source media="(min-width:650px)" srcSet={`/images/${src}.jpg`} />

      <img src={`/images/${src}_mobile.jpg`} alt={alt} />
    </picture>
  );
}
