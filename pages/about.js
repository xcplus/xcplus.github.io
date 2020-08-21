import Link from 'next/link'

const About = () => {
  return (
    <div className="flex flex-col mt-8 mx-1 flex-1 md:mr-4 md:w-4/5">
      <div className="article bg-gray-400 h-64 bg-opacity-25 rounded-lg  text-center  p-4">
        <h2 className="text-lg mb-4">Xcplus</h2>
        <div className="text-gray-600 py-1">我是一名web开发者</div>
        <div className="text-gray-600 py-1">后端技术栈: Ruby、Elixir、Node.js、Golang、Rust、Scala</div>
        <div className="text-gray-600 py-1">前端技术框架: Next.js、React.js、Tailwind CSS、Flutter</div>
        <div className="text-gray-600 py-1">数据库: Postgresql、Mysql、Redis</div>
        <div>待完善~~~</div>
      </div>
    </div>
  )
}

export default About