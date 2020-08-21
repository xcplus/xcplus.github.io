import PostDetail from '../../components/posts/PostDetail'

const Detail = ({ blog }) => {
  return (
    <div className="flex flex-col flex-1 mt-8 mx-1 w-1">
      <PostDetail blog={blog}/>
    </div>
  )
}

// 构建时在服务器调用
export async function getStaticProps(context) {
  const fs = require('fs')
  const html = require('remark-html')
  const highlight = require('remark-highlight.js')
  const unified = require('unified')
  const markdown = require('remark-parse')
  const matter = require('gray-matter')

  const slug = context.params.slug
  const path = `${process.cwd()}/contents/tech/${slug}.md`

  const rawContent = fs.readFileSync(path, {encoding: 'utf-8'})
  const {data, content} = matter(rawContent)

  const result = await unified()
    .use(markdown)
    .use(highlight) // highlight code block
    .use(html)
    .process(content)

  return {
    props: {
      blog: {
        ...data,
        content: result.toString()
      }
    }
  }
}

// 在构建时生成HTML路径
export async function getStaticPaths() {
  const fs = require('fs')

  const path = `${process.cwd()}/contents/tech`
  const files = fs.readdirSync(path, "utf-8")

  const markdownFileNames = files
    .filter((fn) => fn.endsWith(".md"))
    .map((fn) => fn.replace(".md", ""))

  return {
    paths: markdownFileNames.map((fileName) => {
      return {
        params: {
          slug: fileName
        }
      }
    }),
    fallback: false
  }
}

export default Detail