const Title = ({children, className}) => {
  return (
    <p
      className={`text-xl md:text-3xl ${className}`}
    >
      {children}
    </p>
  )
}

export default Title;