import Link from 'next/link'
import React from 'react'
import { ArticleType } from '../types/article'
import FadeIn from '../FadeIn'

const ArticleItem = ({article}: {article: ArticleType}) => {
  return (
    <FadeIn>
      <Link href={`/articles/${article.slug}`}>
        <div className=" text-gray-400">{article.date}</div>
        <div className="text-xl py-1 font-bold hover:text-indigo-500">{article.title}</div>
        <div className="flex flex-wrap gap-1">
          {
            article.tags.split(",").map((tag: string) => <span key={tag.trim()} className="px-2 py-0 leading-7 bg-purple-400 text-white rounded-full text-sm">#{tag.trim()}</span>)
          }
        </div>
      </Link>
    </FadeIn>
  )
}

export default ArticleItem