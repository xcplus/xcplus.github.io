import SideBar from './SideBar'
import Navbar from './Navbar'
import { useRouter } from 'next/router'
import Footer from './Footer'

const Layout = ({ children }) => {
  const router = useRouter()
  return (
    <>
      <Navbar pname={router.pathname} />
      <div className="flex flex-row mx-2 md:mx-8 lg:mx-24 xl:mx-32">
        { children }
        <SideBar />
      </div>
      <Footer />
    </>
  )
}

export default Layout