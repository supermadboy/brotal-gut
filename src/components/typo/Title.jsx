const Title = ({ children, className }) => {
  return <p className={`text-2xl md:text-4.5xl ${className}`}>{children}</p>;
};

export default Title;
