import classNames from 'classnames';
import Link from 'next/link'
import { useRouter } from 'next/router';

const navItems = [
  {
    path: '/', name: '首页'
  },
  {
    path: '/articles', name: '文章'
  },
  {
    path: '/projects', name: '项目'
  },
  {
    path: '/about', name: '关于'
  }
]

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <div className="fixed flex top-4 bg-white rounded-full dark:bg-slate-800">
      <nav className="px-2 py-4 rounded-full items-center font-semibold bg-transparent shadow-lg dark:shadow-md dark:shadow-slate-800">
        {
          navItems.map(navItem => 
            <Link href={navItem.path} key={navItem.name} className={
              classNames(
                "nav_link", 
                {
                  "hover:bg-indigo-300 hover:rounded-full hover:text-stone-50": 
                  navItem.path == "/" ? pathname !== navItem.path : !pathname.startsWith(navItem.path)},
                {
                  "bg-indigo-700 rounded-full text-white": 
                  navItem.path == "/" ? pathname === navItem.path : pathname.startsWith(navItem.path)
                }
              )
            }>
              {navItem.name}
            </Link>
          )
        }
      </nav>
    </div>
  )
}

export default Nav