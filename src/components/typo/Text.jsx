const Text = ({ children, className, id }) => {
  return (
    <p id={id} className={`text-base leading-tight ${className}`}>
      {children}
    </p>
  );
};

export default Text;
