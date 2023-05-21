import { ArticleType } from '@/components/types/article';
import { getAllArticlesId, getArticleData } from '@/lib/articles';
import Head from 'next/head';
import React from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import emoji from 'remark-emoji';
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';

const Details = ({ articleData }: {articleData: ArticleType}) => {
  return (
    <div>
      <Head>
        <title>{articleData.title}</title>
      </Head>
      <div className='flex flex-col justify-center items-center gap-4 px-2'>
        <div className=' font-extrabold text-2xl'>{articleData.title}</div>
        <div className='flex gap-4'>
          <div className=' font-medium text-slate-400 '>{articleData.date}</div>
          <div className='flex gap-2'>
            {
              articleData.tags.split(",").map((tag: string) => <span key={tag.trim()} className="px-2 py-0 leading-7 bg-purple-400 text-white rounded-full text-sm">#{tag.trim()}</span>)
            }
          </div>
        </div>
      </div>
      <div className='mt-4 tracking-wide leading-8 overflow-y-scroll mx-0 px-2 max-w-full' >
        <ReactMarkdown
          children={articleData.markdownContent} 
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          }}
          remarkPlugins={[remarkGfm, emoji]} />
      </div>
    </div>
  )
}


export async function getStaticPaths() {
  const paths = getAllArticlesId();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: {params: {slug: string}}) {
  const articleData = await getArticleData(params.slug);
  return {
    props: {
      articleData,
    },
  };
}

export default Details