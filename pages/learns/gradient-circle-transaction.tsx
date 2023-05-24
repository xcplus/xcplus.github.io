import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import emoji from 'remark-emoji';
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getLearnsById } from '@/lib/articles';
import { ArticleType } from '@/components/types/article';

const GradientCircleTransaction = ({articleData}: {articleData: ArticleType}) => {
  return (
    <div className='flex flex-col justify-center gap-4 items-center w-full'>
      <button 
        type='button' 
        className='px-24 py-8 text-3xl font-bold 
        bg-[conic-gradient(from_var(--shimmer-angle),theme(colors.red.500)_0%,theme(colors.yellow.500)_30%,theme(colors.blue.500)_60%,theme(colors.green.500)_90%)] 
        animate-[shimmer_2s_linear_infinite] rounded-[24px] relative
        after:flex after:absolute after:bg-slate-300 after:inset-[2px] after:rounded-[22px] after:content-[attr(aria-label)]
        after:justify-center after:items-center dark:after:bg-slate-600
        '
        aria-label="光圈渐变动画"
        >
        <span className=' opacity-0'>渐变光圈变化</span>
      </button>
      <div className='mt-4 tracking-wide leading-8 overflow-y-scroll mx-0 px-2 max-w-full prose lg:prose-xl dark:prose-invert'>
      <ReactMarkdown
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  style={tomorrow}
                  language={match[1]}
                  PreTag="div"
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          }}
          remarkPlugins={[remarkGfm, emoji]}>
            {articleData.markdownContent}
          </ReactMarkdown>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const articleData = await getLearnsById("conic-gradient-animate");
  return {
    props: {
      articleData,
    },
  };
}

export default GradientCircleTransaction