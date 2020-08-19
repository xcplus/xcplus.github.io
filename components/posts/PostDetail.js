import Link from 'next/link'
import { FaTags, FaBookmark, FaCalendarWeek } from 'react-icons/fa';

const PostDetail = ({ blog: { title, date, content, node, tags, slug } }) => {
  return (
    <div className="article">
      <Link href="/tech/[slug]" as={`/tech/${slug}`}>
        <a className="font-semibold h-10 text-xl text-indigo-600 block">{title}</a>
      </Link>
      <div className="inline-block">
        <small  className="h-8 text-sm font-thin"><FaCalendarWeek className="inline mr-1" />{date}</small>
        <small className="h-8 text-sm font-thin "> • <FaTags className="inline mr-1" />{tags}</small>   
        <small  className="h-8 text-sm font-thin"> • <FaBookmark className="inline mr-1" />{node}</small>
      </div>
      <div className="h-10 leading-8 font-light my-2" dangerouslySetInnerHTML={{__html: content}}></div>
    </div>
  )
}

export default PostDetail