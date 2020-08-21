import ListDetail from '../../components/posts/ListDetail'
import NoData from '../../components/NoData'

const Index = ({ blogs }) => {
  return (
    <div className="flex flex-col mt-8 mx-1 flex-1 md:mr-4 md:w-4/5">
      {
        blogs.length > 0 ?
          blogs.map(bg => <ListDetail key={bg.id} blog={bg} />) : <NoData />
      }
    </div>
  )
}

// 在构建时在服务器端调用此函数。
export async function getStaticProps() {
  const fs = require('fs')
  const matter = require('gray-matter')
  const {v4: uuid} = require('uuid')

  const files = fs.readdirSync(`${process.cwd()}/contents/tech`, 'utf-8')

  const blogs = files.filter((fn) => fn.endsWith('.md'))
    .map((fn) => {
      const path = `${process.cwd()}/contents/tech/${fn}`
      const rawContent = fs.readFileSync(path, {
        encoding: 'utf-8'
      })
      const { data } = matter(rawContent)

      return {...data, id: uuid()}
    })
    return { props: { blogs } }
}

export default Index;