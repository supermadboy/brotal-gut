const EmailLink = ({mail, className}) => {
  return (
    <a
      href={`mailto:${mail}`}
      className={`text-xl md:text-5xl ${className}`}
    > 
      {mail}
    </a>
  )
}

export default EmailLink;