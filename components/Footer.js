import Link from 'next/link'
import { FaFileCode } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="flex flex-col justify-center text-xs md:text-sm items-center bg-gray-200 bg-opacity-75 text-gray-600 text-opacity-75 py-6 mt-16">
      <div >
        Powered by 
        <Link href="https://nextjs.org/">
          <a className="text-indigo-400 bg-indigo-200 p-1 m-1 hover:text-white hover:bg-indigo-400" target="_blank"> Next.js </a>
        </Link>
        & deploy to gh-pages
      </div>
      <div className="my-2">
        Auth 
        <Link href="https://github.com/xcplus">
          <a className="text-indigo-400 bg-indigo-200 p-1 m-1 hover:text-white hover:bg-indigo-400" target="_blank"> Xcplus </a>
        </Link>
        <Link href="https://github.com/xcplus/xcplus.github.io">
          <a className="text-green-400 inline-block" target="_blank"> <FaFileCode /> </a>
        </Link>
      </div>
    </div>
  )
}

export default Footer