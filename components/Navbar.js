import Link from 'next/link'

function regTest(href, rec_href, total = false) {
  if(total) {
    return href===rec_href
  }
  return RegExp(`^${href}`).test(rec_href)
}

const Navbar = ({ pname }) => {
  return (
    <div className="bg-indigo-600 h-10 text-center flex justify-center items-center font-medium text-lg tracking-widest">
      <Link href="/">
        <a className={`mx-1 px-4 text-gray-200 hover:bg-white hover:text-indigo-600 h-10 leading-10 ${regTest("/", pname, true) ? 'active' : null}`}>首页</a>
      </Link>
      <Link href="/tech">
        <a className={`mx-1 px-4 text-gray-200 hover:bg-white hover:text-indigo-600 h-10 leading-10 ${regTest("/tech", pname) ? 'active' : null}`}>技术</a>
      </Link>
      <Link href="/life">
        <a className={`mx-1 px-4 text-gray-200 hover:bg-white hover:text-indigo-600 h-10 leading-10 ${regTest("/life", pname) ? 'active' : null}`}>生活</a>
      </Link>
      <Link href="/about">
        <a className={`mx-1 px-4 text-gray-200 hover:bg-white hover:text-indigo-600 h-10 leading-10 ${regTest("/about", pname) ? 'active' : null}`}>关于我</a>
      </Link>
    </div>
  )
}

export default Navbar