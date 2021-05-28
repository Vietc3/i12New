import React from 'react';
import TrendingCard from '../components/views/homepage/Trending';
import { GetStaticProps } from 'next';
import { useGetArticles } from '../helpers/articles';
import { NextSeo } from 'next-seo'

type Props = {
  featured?: any;
  articles?: any;
  errors?: string;
};

const IndexPage = ({ articles, featured }: Props) => {
  return (<>
    <NextSeo
      title="Home"
      description="This is homepage of i12 Katong"
      canonical="https://www.canonicalurl.ie/"
      openGraph={{
        url: 'https://www.canonicalurl.ie/',
        title: 'Home',
        description: 'This is homepage of PlayIt Right Blog Store',
        images: [
          {
            url: '/logo.png',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: '/logo.png',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: '/logo.Png' },
          { url: '/logo.Png' },
        ],
      }}
    />
    <TrendingCard articles={featured} />
  </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  try {
    let data = await useGetArticles('featured=false&_sort=public_date:DESC&_limit=4');
    let dataFeatured = await useGetArticles('featured=true');

    return { props: { articles: data, featured: dataFeatured }, revalidate: 10 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default IndexPage;
