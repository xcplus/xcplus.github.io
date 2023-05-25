import Link from 'next/link'
import React from 'react'
import styles from './pulsing-button.module.css'
import { IoFingerPrintOutline, IoPushOutline, IoPrintOutline } from "react-icons/io5";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import emoji from 'remark-emoji';
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { getLearnsById } from '@/lib/articles';
import { ArticleType } from '@/components/types/article';

const PulsingButton = ({articleData}: {articleData: ArticleType}) => {
  return (
    <div className='flex flex-col justify-center gap-2 items-center w-full'>
      <div className='flex justify-between items-center min-w-[240px]'>
        <Link href="#" className={styles.pulse}
        >
          <IoFingerPrintOutline className=' text-4xl absolute p-1 top-3 left-3'/>
        </Link>
        <Link href="#" className={styles.pulse} style={{filter: 'hue-rotate(120deg)'}} >
          <IoPushOutline className=' text-4xl absolute p-1 top-3 left-3' />
        </Link>
        <Link href="#" className={styles.pulse}  style={{filter: 'grayscale()'}}>
          <IoPrintOutline className='text-4xl absolute p-1 top-3 left-3' />
        </Link>
      </div>
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
  const articleData = await getLearnsById("pulsing-button");
  return {
    props: {
      articleData,
    },
  };
}

export default PulsingButton