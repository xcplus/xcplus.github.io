import ListDetail from '../../components/posts/ListDetail'
import NoData from '../../components/NoData'

const Index = ({ blogs }) => {
  return (
    <div className="flex flex-col justify-around pr-4">
      {
        blogs.map(bg => <ListDetail key={bg.id} blog={bg} />)
      }
      {blogs.length === 0 && <NoData />}
    </div>
  )
}

// 在构建时在服务器端调用此函数。
export async function getStaticProps() {
  const fs = require('fs')
  const matter = require('gray-matter')
  const {v4: uuid} = require('uuid')

  const files = fs.readdirSync(`${process.cwd()}/contents/life`, 'utf-8')

  const blogs = files.filter((fn) => fn.endsWith('.md'))
    .map((fn) => {
      const path = `${process.cwd()}/contents/life/${fn}`
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8'
      })
      const { data } = matter(rawContent)

      return {...data, id: uuid()}
    })
    return { props: { blogs } }
}

export default Index;