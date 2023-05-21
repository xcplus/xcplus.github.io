import Bios from "@/components/Bios";
import FadeIn from "@/components/FadeIn";
import SimpleIntro from "@/components/SimpleIntro";
import Link from "next/link";
import { getAllSortedProjects, getSortedArticlesData } from "../lib/articles";
import ArticleItem from "@/components/articles/ArticleItem";
import { ArticleType } from "@/components/types/article";
import { ProjectType } from "@/components/types/project";
import ProjectItem from "@/components/projects/ProjectItem";

const Home = ({ allArticlesData, allProjects }: {allArticlesData: ArticleType[], allProjects: ProjectType[]}) => {
  return (
    <div className="flex-1 flex w-full flex-col">
      <FadeIn>
        <div className="flex flex-col sm:flex-col md:flex-row gap-2 justify-between items-start" style={{minHeight: 240}}>
          <div className="flex-1 flex flex-col h-full">
            <p className='text-6xl font-extrabold mb-4'>欢迎到来 👏  </p>
            <p className="text-2xl text-slate-400 py-4">我是Xcplus —— Web开发者, 喜欢安静.</p>
            <Bios />
            <div className="grow flex flex-col justify-between gap-2 items-center py-4 sm:flex-col md:flex-row">
              <Link href='/about' className="border py-2 px-4 rounded-full bg-black text-white text-center text-base  font-medium no-underline dark:bg-white dark:text-black w-4/5 md:w-2/3 lg:w-1/3">
                了解更多
              </Link>
              <Link href='https://github.com/xcplus' target="_blank" className="border text-center py-2 px-4 rounded-full text-base font-medium no-underline w-4/5 md:w-2/3 lg:w-1/3">
                Github
              </Link>
              <div></div>
            </div>
          </div>
          <SimpleIntro />
        </div>
      </FadeIn>
      <div className="flex justify-between flex-col md:flex-row">
        <FadeIn classnames="flex flex-1 flex-col mt-10">
          <div className="flex mb-2 items-end justify-between md:w-3/4">
            <div className="text-3xl font-semibold">
              近期文章
            </div>
            <Link href="/articles" className="font-light">更多</Link>
          </div>
          <div className="border-1 h-1 bg-black md:w-3/4 dark:bg-slate-100"></div>
          <div className="flex flex-col gap-6 mt-4">
            {allArticlesData.slice(0,3).map((article: ArticleType) => <ArticleItem article={article} key={article.slug}/>)} 
          </div>
        </FadeIn>
        <FadeIn classnames="flex flex-1 flex-col mt-10">
          <div className="flex mb-2 items-end justify-between md:w-3/4">
            <div className="text-3xl font-semibold">
              近期项目
            </div>
            <Link href="/projects" className="font-light">更多</Link>
          </div>
          <div className="border-1 h-1 bg-black md:w-3/4 dark:bg-slate-100"></div>
          
          <div className="grid sm:grid-cols-2 gap-2 mt-4">
            {
              allProjects.slice(0,2).map((project: ProjectType) => <ProjectItem key={project.title} project={project} /> )
            }
          </div>
        </FadeIn>
      </div>
    </div>      
  )
}

export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData();
  const allProjects = getAllSortedProjects();
  return {
    props: {
      allArticlesData,
      allProjects
    },
  };
}
export default Home