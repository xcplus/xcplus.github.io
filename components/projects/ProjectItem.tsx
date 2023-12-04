import React from 'react'
import FadeIn from '../FadeIn'
import Link from 'next/link'
import Image from "next/image";
import { ProjectType } from '../types/project';

const ProjectItem = ({ project } : { project: ProjectType }) => {
  return (
    <FadeIn>
      <Link href={project.proUrl}>
        <div className="hover:bg-gray-50 w-full hover:text-black  hover:rounded-2xl px-2 py-2">
          <div style={{height: "260px"}}>
            <Image
              src={project.pic}
              alt="ppc"
              width={320}
              height={160}
              className="inset-0 h-full w-full object-cover rounded-t-2xl"
            />
          </div>
          <div className="font-bold text-lg py-2">{project.title}</div>
          <div className="font-medium text-slate-500 pb-2">{project.summary}</div>
        </div>
      </Link>
    </FadeIn>
  )
}

export default ProjectItem