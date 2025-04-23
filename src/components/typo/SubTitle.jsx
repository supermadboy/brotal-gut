const SubTitle = ({ children, className }) => {
  return (
    <p className={`text-large md:text-extra-large ${className}`}>{children}</p>
  );
};

export default SubTitle;
