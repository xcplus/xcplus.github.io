import { FaBookOpen } from 'react-icons/fa'
import Link from 'next/link'

const NoData = () => {
  return (
    <div className="article flex flex-col justify-center items-center bg-gray-400 h-64 mt-8 bg-opacity-25">
      <FaBookOpen size={60} color='gray'/>
      <p className="text-gray-500 font-semibold mt-8">
        还没有留下任何文字~~
      </p>
      <Link href="/">
        <a className="font-light mt-8 underline">去首页</a>
      </Link>
    </div>
  )
}

export default NoData