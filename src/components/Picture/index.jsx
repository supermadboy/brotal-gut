export default function Picture({ src, alt, className, id, style }) {
  return (
    <picture className={className} id={id} style={style}>
      <source media="(min-width:650px)" srcSet={`/images/${src}.jpg`} />

      <img src={`/images/${src}_mobile.jpg`} alt={alt} />
    </picture>
  );
}
