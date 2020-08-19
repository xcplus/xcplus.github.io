import { FaGithubSquare, FaTwitterSquare, FaWeixin, FaYoutubeSquare } from 'react-icons/fa'
import Link from 'next/link'
import IconLink from '../components/IconLink'

const SideBar = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-400 bg-opacity-25 border-t-4 border-b-4 p-6 h-64 my-8 w-1/5">
      <img className="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto" src='https://lh3.googleusercontent.com/a-/AOh14GgFQ97V2Yy5vg5trH_AVhRILCSSAhn9QpqhSNmz=s88-c-k-c0x00ffffff-no-rj-mo' />
      <div className="leading-8 text-gray-600">Xcplus</div>
      <div className="leading-8 text-orange-400">当下努力，未来可期</div>
      <div className="flex flex-row justify-evenly">
        <IconLink
          url="https://github.com/xcplus"
          hoverColor="text-black"
        >
          <FaGithubSquare size={30}/>
        </IconLink>
        <IconLink
          url="https://twitter.com"
          hoverColor="text-blue-600"
        >
          <FaTwitterSquare size={30}/>
        </IconLink>
        <IconLink
          url="https://youtube.com"
          hoverColor="text-red-700"
        >
          <FaYoutubeSquare size={30}/>
        </IconLink>
      </div>
    </div>
  )
}

export default SideBar