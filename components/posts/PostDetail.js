import Link from "next/link";
import { FaTags, FaBookmark, FaCalendarWeek } from "react-icons/fa";

const PostDetail = ({ blog: { title, date, content, node, tags, slug } }) => {
  return (
    <div className="article pb-24 md:pb-0 md:mr-4">
      <Link href="/tech/[slug]" as={`/tech/${slug}`}>
        <a className="font-semibold text-base text-indigo-600 block md:text-xl">
          {title}
        </a>
      </Link>
      <div className="inline-block mt-1 text-sm font-hairline text-gray-600">
        <small>
          <FaCalendarWeek className="inline mr-1" />
          {date}
        </small>
        <small>
          {" "}
          • <FaTags className="inline mr-1" />
          {tags}
        </small>
        <small>
          {" "}
          • <FaBookmark className="inline mr-1" />
          {node}
        </small>
      </div>
      <div
        className="leading-8 text-sm font-light my-1 md:text-base md:font-hairline"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
};

export default PostDetail;
