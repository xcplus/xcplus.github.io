import React from 'react'
import Link from "next/link";
import { getSortedArticlesData } from '@/lib/articles';
import { ArticleType } from '@/components/types/article';
import ArticleItem from '@/components/articles/ArticleItem';

const Articles = ({ allArticlesData }: {allArticlesData: ArticleType[]}) => {
  return (
    <div className='flex flex-col md:gap-4 gap-2'>
      {allArticlesData.map((article: ArticleType) => <ArticleItem article={article} key={article.slug} />)} 
    </div>
  )
}

export async function getStaticProps() {
  const allArticlesData = getSortedArticlesData();
  return {
    props: {
      allArticlesData,
    },
  };
}

export default Articles