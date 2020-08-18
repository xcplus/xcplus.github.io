import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <div className="bg-indigo-600 px-8 py-4 text-center">
        <Link href="/">
          <a className="mr-5 text-gray-200">首页</a>
        </Link>
        <Link href="/tech">
          <a className="mr-5 text-gray-200">技术</a>
        </Link>
        <Link href="/life">
          <a className="mr-5 text-gray-200">生活</a>
        </Link>
        <Link href="/about">
          <a className="mr-5 text-gray-200">关于</a>
        </Link>
      </div>
      <div className="flex flex-row mx-64">
        <div className="w-3/4">
          <div className="py-8">
            <h4 className="font-normal h-10 text-xl text-indigo-600">
              我的第一篇博客
            </h4>
            <div>
              <small className="h-8 text-sm font-thin">标签: ruby,elixir</small> •  
              <small  className="h-8 text-sm font-thin">分类: 生活</small> •
              <small  className="h-8 text-sm font-thin">2020-08-18</small>
            </div>
            <p className="h-10 text-lg font-light my-2">心有多大，路有多宽心有多大，路有多宽心有多大，路有多宽 心有多大，路有多宽心有多大，路有多宽心有多大，路有多宽心有多大，路有多宽心有多大，路有多宽心有多大，路有多宽 ...... <Link href="/"><a className="text-gray-600 text-opacity-75" >阅读更多</a></Link></p>
            
          </div>

          <div className="py-8">
            <h4 className="font-normal h-10 text-xl text-indigo-600">
              Ruby 中的继承
            </h4>
            <div>
              <small className="h-8 text-sm font-thin">标签: ruby,elixir</small> •  
              <small  className="h-8 text-sm font-thin">分类: 生活</small> •
              <small  className="h-8 text-sm font-thin">2020-08-18</small>
            </div>
            <p className="h-10 text-lg font-light my-2">心有多大，路有多宽心有多大，路有多宽心有多大，路有多宽 ...... <Link href="/"><a className="text-gray-600 text-opacity-75" >阅读更多</a></Link></p>
          </div>
          <div className="py-8">
            <h4 className="font-normal h-10 text-xl text-indigo-600">
              ACE加密
            </h4>
            <div>
              <small className="h-8 text-sm font-thin">标签: ruby,elixir</small> •  
              <small  className="h-8 text-sm font-thin">分类: 生活</small> •
              <small  className="h-8 text-sm font-thin">2020-08-18</small>
            </div>
            <p className="h-10 text-lg font-light my-2">心有多大，路有多宽 心有多大，路有多宽心有多大，路有多宽...... <Link href="/"><a className="text-gray-600 text-opacity-75" >阅读更多</a></Link></p>
          </div>
          <div className="py-8">
            <h4 className="font-normal h-10 text-xl text-indigo-600">
              通过 Mina 自动部署 Ruby 项目
            </h4>
            <div>
              <small className="h-8 text-sm font-thin">标签: ruby,elixir</small> •  
              <small  className="h-8 text-sm font-thin">分类: 生活</small> •
              <small  className="h-8 text-sm font-thin">2020-08-18</small>
            </div>
            <p className="h-10 text-lg font-light my-2">心有多大，路有多宽心有多大，路有多宽心有多大，路有多宽心有多大，路有多宽...... <Link href="/"><a className="text-gray-600 text-opacity-75" >阅读更多</a></Link></p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center bg-gray-400 bg-opacity-25 border-t-4 border-b-4 p-4 h-64 ml-4 my-8 w-1/4">
          <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="https://tailwindcss.com/_next/static/media/erin-lindford.4804b52007ca82ebe9999d19c717b44d.jpg" />
          <p>当下努力，未来可期</p>
          <div className="flex flex-row justify-between">
            <div>github</div>
            <div>twitter</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;