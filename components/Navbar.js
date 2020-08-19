import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="bg-indigo-600 px-8 py-4 text-center">
      <Link href="/">
        <a className="mr-5 text-gray-200">首页</a>
      </Link>
      <Link href="/tech">
        <a className="mr-5 text-gray-200">技术</a>
      </Link>
      <Link href="/life">
        <a className="mr-5 text-gray-200">生活</a>
      </Link>
      <Link href="/about">
        <a className="mr-5 text-gray-200">关于我</a>
      </Link>
    </div>
  )
}

export default Navbar