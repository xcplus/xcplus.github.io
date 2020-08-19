import Link from 'next/link'

const IconLink = ({ url, hoverColor, defaultColor = "text-gray-500", children}) => {
  return (
    <Link href={url}>
      <a className={`cursor-pointer ${defaultColor} hover:${hoverColor}`} target="_blank">
        {children}
      </a>
    </Link>
  )
}

export default IconLink