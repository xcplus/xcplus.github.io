import Link from 'next/link'
import { FaTags, FaBookmark, FaCalendarWeek } from 'react-icons/fa';

const ListDetail = ({ blog: { title, date, intro, node, tags, slug} }) => {
  return (
    <div className="article mb-4 md:pb-0">
      <Link href="/tech/[slug]" as={`/tech/${slug}`}>
        <a className="font-semibold text-base text-indigo-600 block visited:text-purple-600 hover:text-red-400 md:text-xl">
          {title}
        </a>
      </Link>
      <div className="inline-block text-sm font-hairline text-gray-600">
        <small><FaCalendarWeek className="inline mr-1" />{date}</small>
        <small> • <FaTags className="inline mr-1" />{tags}</small>   
        <small> • <FaBookmark className="inline mr-1" />{node}</small>
      </div>
      <p className="text-sm font-light my-1 md:text-base md:font-hairline">
        {intro} ...... 
        <Link href="/tech/[slug]" as={`/tech/${slug}`}>
          <a className="text-indigo-600 text-opacity-75 ml-2 hover:text-black hover:underline" >阅读更多</a>
        </Link>
      </p>
    </div>
  )
}

export default ListDetail