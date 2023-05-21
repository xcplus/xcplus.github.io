import FadeIn from '@/components/FadeIn';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

import { AiFillGithub, AiOutlineTwitter, AiOutlineMail } from "react-icons/ai";

const About = () => {
  return (
      <div className='flex flex-col flex-1'>
        <FadeIn>
          <div className='flex flex-col justify-center w-full h-96'> 
            <div className='flex w-full justify-center items-center'>
              <Image 
                src='/ts.png'
                height={100}
                width={100}
                className='rounded-full border-4 border-t-orange-500 border-r-blue-500 border-b-green-500 border-l-purple-500 p-1'
                alt='Xcplus'
              />
            </div>
            <div className='text-center font-semibold mt-2 text-2xl'>Xcplus</div>
            <div className='text-center mt-2 text-lg text-slate-500'>
              通过博客鼓励自己不断学习；当下努力，未来可期
            </div>
            <div className='mt-4 flex flex-col justify-center items-center gap-2 md:gap-4 sm:flex-row md:flex-row'>
              <Link href='https://github.com/xcplus' target='_blank' className='flex justify-center text-white items-center bg-black dark:bg-gray-800 px-4 py-1 gap-2 rounded-md hover:shadow-lg hover:shadow-gray-800/20 dark:hover:shadow-slate-600/20 w-4/5 md:w-1/5'>
                <AiFillGithub className='text-white text-2xl'/>
                <span className=' text-xl'>Github</span>
              </Link>
              <Link href='https://twitter.com/golovesx' target='_blank' className='flex justify-center text-white items-center bg-sky-500 px-4 py-1 gap-2 rounded-md hover:shadow-lg hover:shadow-sky-500/20 w-4/5 md:w-1/5'>
                <AiOutlineTwitter className='text-white text-2xl' />
                <span className=' text-xl'>Twitter</span>
              </Link>
              <Link href='mailto:golovesx@gmail.com' className='flex justify-center text-white items-center bg-violet-500 px-4 py-1 gap-2 rounded-md hover:shadow-lg hover:shadow-violet-500/20 w-4/5 md:w-1/5'>
                <AiOutlineMail className='text-white text-2xl' />
                <span className=' text-xl'>邮箱</span>
              </Link>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
        <div className='flex flex-col justify-center mt-14 border-t w-full h-96'> 
          <div className=' text-center mt-8 font-semibold text-2xl'>关于我</div>
          <FadeIn>
            <div className=' font-normal text-lg leading-8 mt-6'>
              <p>大家好，我是xcplus，主要是网站开发;</p>
              <p>从事过爬虫、O2O、微信相关公众号和小程序、电商erp、以及手机app等开发;</p>
              <p>目前主要技术栈<strong className=' text-orange-600'>Ruby on Rails、Nestjs、Nextjs、Prisma、TypeORM、flutter、Mysql、Postgresql、Nginx</strong>等;</p>
              <p>未来打算学习Elixir、Rust、Web3等。</p>
            </div>
          </FadeIn>
        </div>
        </FadeIn>
        <FadeIn>
          <div className='flex flex-col justify-center mt-14 border-t w-full h-96'> 
            <div className=' text-center mt-8 font-semibold text-2xl'>关于网站</div>
            <FadeIn>
              <div className=' font-normal text-lg leading-8 mt-6'>
                <p>本站主要是用来记录学到的知识，以便之后翻阅,</p>
                <p>主要是软件方面的知识，也会有一些生活所感或者是其他天马星空的想法。</p>
                <p>本站技术栈: </p>
                <p><strong className=' text-orange-600'>Typescript、 Nextjs、 TailwindCSS</strong></p>
              </div>
            </FadeIn>
          </div>
        </FadeIn>
      </div>
  )
}

export default About