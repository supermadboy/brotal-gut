const SubTitle = ({ children, className }) => {
  return (
    <p className={`text-xl md:text-3xl leading-8 ${className}`}>{children}</p>
  );
};

export default SubTitle;
