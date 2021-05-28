import React from 'react';
import TrendingCard from '../components/views/homepage/Trending';
import LastestCard from '../components/views/homepage/Lastest';
import SubscribeForm from '../components/forms/SubscribeForm';
import { GetStaticProps } from 'next';
import { useGetArticles } from '../helpers/articles';
import NewsletterForm from '../components/NewsletterForm';

import { Box } from '@chakra-ui/react';
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
      description="This is homepage of PlayIt Right Blog Store"
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
          { url: '/logo.png' },
          { url: '/logo.png' },
        ],
      }}
    />
    <TrendingCard articles={featured} />
    <LastestCard articles={articles} />
    {/* <Box w="100%" display={{ base: "none", lg: "flex" }}>
      <SubcribeForm marginY="10px" />
    </Box>
    <Box w="100%" display={{ base: "flex", lg: "none" }}>
      <NewsletterForm />
    </Box> */}

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
