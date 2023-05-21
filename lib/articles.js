import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), 'articles');
const projectJsonFilePath = path.join(process.cwd(), 'lib/projects.json');

export function getSortedArticlesData() {
  // 获取articles文件夹的文件名
  const fileNames = fs.readdirSync(articlesDirectory)
  const allArticles = fileNames.map((filename) => {
    // 读取markdown文件
    const fullpath = path.join(articlesDirectory, filename);
    const fileContents = fs.readFileSync(fullpath, 'utf-8');

    // 用gray-matter解析文章的metadata部分
    const matterResult = matter(fileContents);

    return {
      ...matterResult.data
    }
  })

  // 根据时间倒序
  return allArticles.sort((a, b) => {
    if(a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  }) 
}

export function getAllArticlesId() {
  const fileNames = fs.readdirSync(articlesDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getArticleData(id) {
  const fullPath = path.join(articlesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);
  const markdownContent = matterResult.content

  return {
    markdownContent,
    ...matterResult.data,
  };
}


export function getAllSortedProjects() {
  const fileContents = fs.readFileSync(projectJsonFilePath, 'utf8');
  const projectInfos = JSON.parse(fileContents);
  // 根据时间倒序
  return projectInfos.sort((a, b) => {
    if(a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  }) 
}