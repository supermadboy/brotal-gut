export default function Picture({ src, alt }) {
  return (
    <picture>
      <source media="(min-width:650px)" srcSet={`/images/${src}.jpg`} />

      <img src={`/images/${src}_mobile.jpg`} alt={alt} />
    </picture>
  );
}
