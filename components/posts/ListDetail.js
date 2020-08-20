import Link from 'next/link'
import { FaTags, FaBookmark, FaCalendarWeek } from 'react-icons/fa';

const ListDetail = ({ blog: { title, date, intro, node, tags, slug} }) => {
  return (
    <div className="article">
      <Link href="/tech/[slug]" as={`/tech/${slug}`}>
        <a className="font-semibold h-10 text-xl text-indigo-600 block visited:text-purple-600 hover:text-red-400 ">
          {title}
        </a>
      </Link>
      <div className="inline-block">
        <small  className="h-8 text-sm font-thin"><FaCalendarWeek className="inline mr-1" />{date}</small>
        <small className="h-8 text-sm font-thin "> • <FaTags className="inline mr-1" />{tags}</small>   
        <small  className="h-8 text-sm font-thin"> • <FaBookmark className="inline mr-1" />{node}</small>
      </div>
      <p className="h-10 leading-8 font-light my-2">
        {intro} ...... 
        <Link href="/tech/[slug]" as={`/tech/${slug}`}>
          <a className="text-indigo-600 text-opacity-75 ml-2 hover:text-black hover:underline" >阅读更多</a>
        </Link>
      </p>
    </div>
  )
}

export default ListDetail