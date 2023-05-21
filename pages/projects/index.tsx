import React from 'react'
import { getAllSortedProjects } from '@/lib/articles'
import { ProjectType } from '@/components/types/project'
import ProjectItem from '@/components/projects/ProjectItem'

const Projects = ({allProjects}: {allProjects: ProjectType[]}) => {
  return (
    <div className="grid sm:grid-cols-3 gap-2 mt-4">
      {
        allProjects.map((project) => <ProjectItem key={project.title} project={project} />)
      }
    </div>
  )
}

export async function getStaticProps() {
  const allProjects = getAllSortedProjects();
  return {
    props: {
      allProjects
    },
  };
}

export default Projects