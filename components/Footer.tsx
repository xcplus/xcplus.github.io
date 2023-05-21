import React from 'react'
import ThemeSwitch from './ThemeSwitch'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t mt-8'>
      <div className="border-t border-salte-100 pb-8 pt-4 dark:border-slate-900">
          <div className="mx-auto max-w-2xl lg:max-w-5xl">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <ThemeSwitch />
                <Link className="transition hover:text-indigo-500" href="/articles">文章</Link>
                <Link className="transition hover:text-indigo-500" href="/projects">项目</Link>
                <Link className="transition hover:text-indigo-500" href="/about">关于</Link>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">© 2023 Xcplus. 保留所有权.</p>
            </div>
          </div>
      </div>
    </footer>
  )
}

export default Footer