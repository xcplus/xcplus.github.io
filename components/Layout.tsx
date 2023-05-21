import React, { ReactNode } from 'react'
import Nav from './Nav'
import Footer from './Footer'

const Layout = ({ children }: {children: ReactNode}) => {
  return (
    <>
      <Nav />
      <div className='app antialiased pt-28'>
        <div className='mx-6 sm:mx-16 flex-1 max-w-full'>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Layout