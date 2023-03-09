const EmailLink = ({mail, className, children}) => {
  return (
    <a
      href={`mailto:${mail}`}
      className={`text-3xl md:text-4.5xl ${className}`}
    > 
      {children}
    </a>
  )
}

export default EmailLink;