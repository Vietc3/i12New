import React from 'react';
import TrendingCard from '../components/views/homepage/Trending';
import ListEvents from '../components/views/homepage/ListEvents';
import ListDeals from '../components/views/homepage/ListDeals';
import Banner from '../components/banner/Banner';
import { GetStaticProps } from 'next';
import { useGetAllCarousels } from '../helpers/carousels';
import { useGetAllEvents } from '../helpers/events';
import { useGetAllDeals } from '../helpers/deals';
import { useGetBanners } from '../helpers/banners';
import { NextSeo } from 'next-seo'

type Props = {
  featured?: any;
  banners?: any;
  carousels?: any;
  events?: any;
  deals?: any;
  errors?: string;
};

const IndexPage = ({ carousels, events,deals, banners }: Props) => {
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
    <TrendingCard carousels={carousels} />
    <ListEvents events={events} />
    <ListDeals deals={deals} />
    <Banner banner={banners.banner_homepage} url={banners.url_banner_homepage}/>
  </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  try {
    let data = await useGetAllCarousels();
    let event = await useGetAllEvents();
    let deal = await useGetAllDeals();
    let banner = await useGetBanners();

    return { props: { carousels: data, events:event, deals:deal, banners:banner}, revalidate: 10 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default IndexPage;
