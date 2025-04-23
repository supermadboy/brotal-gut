const Text = ({ children, className, id }) => {
  return (
    <p id={id} className={`text-small md:text-small-desktop ${className}`}>
      {children}
    </p>
  );
};

export default Text;
