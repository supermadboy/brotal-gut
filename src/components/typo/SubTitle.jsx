const SubTitle = ({children, className}) => {
  return (
    <p
      className={`text-2xl md:text-4.5xl leading-8 ${className}`}
    >
      {children}
    </p>
  )
}

export default SubTitle;