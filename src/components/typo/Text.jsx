const Text = ({ children, className, id }) => {
  return (
    <p id={id} className={`text-small md:text-3xl ${className}`}>
      {children}
    </p>
  );
};

export default Text;
