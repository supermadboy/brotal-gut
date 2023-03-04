const EmailLink = ({mail}) => {
  return (
    <a
      href={`mailto:${mail}`}
      className="text-2xl"
    >
      {mail}
    </a>
  )
}

export default EmailLink;