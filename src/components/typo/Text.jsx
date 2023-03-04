const Text = ({children, className}) => {
  return (
    <p
    className={`text-base leading-tight ${className}`}
    >
      {children}
    </p>
  )
}

export default Text;