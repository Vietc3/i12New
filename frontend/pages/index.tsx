import React from 'react';
import TrendingCard from '../components/views/homepage/Trending';
import ListEvents from '../components/views/homepage/ListEvents';
import ListDeals from '../components/views/homepage/ListDeals';
import Instagrams from '../components/views/homepage/Instagrams';
import Banner from '../components/banner/Banner';
import { GetStaticProps } from 'next';
import { useGetAllCarousels } from '../helpers/carousels';
import { useGetAllEvents } from '../helpers/events';
import { useGetAllDeals } from '../helpers/deals';
import { useGetBanners } from '../helpers/banners';
import { useGetInstagram } from '../helpers/instagram';
import { NextSeo } from 'next-seo'

type Props = {
  featured?: any;
  banners?: any;
  carousels?: any;
  events?: any;
  instagrams?: any;
  deals?: any;
  errors?: string;
};

const IndexPage = ({ carousels, events,deals, banners,instagrams }: Props) => {
  return (<>
    <NextSeo
      title="Home"
      description="This is homepage of i12 Katong"
      canonical="https://www.canonicalurl.ie/"
      openGraph={{
        url: 'https://www.canonicalurl.ie/',
        title: 'Home',
        description: 'This is homepage of i12 Katong',
        images: [
          {
            url: '/logo.PNG',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          {
            url: '/logo.PNG',
            width: 900,
            height: 800,
            alt: 'Og Image Alt Second',
          },
          { url: '/logo.PNG' },
          { url: '/logo.PNG' },
        ],
      }}
    />
    <TrendingCard carousels={carousels} />
    <ListEvents events={events} />
    <ListDeals deals={deals} />
    <Banner      mt="70px" pl={{base:'0px',lg:"60px"}} pr={{base:'0px',lg:"60px"}} banner={banners.banner_homepage} url={banners.url_banner_homepage}/>
    <Instagrams  instagrams={instagrams} />
  </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {

  try {
    let data = await useGetAllCarousels();
    let event = await useGetAllEvents();
    let deal = await useGetAllDeals();
    let banner = await useGetBanners();
    let instagrams = await useGetInstagram();
    return { props: { carousels: data, events:event, deals:deal, banners:banner, instagrams:instagrams}, revalidate: 10 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default IndexPage;
