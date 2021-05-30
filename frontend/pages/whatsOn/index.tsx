import React from 'react';
import Banner from '../../components/banner/Banner';
import { GetStaticProps } from 'next';
import { useGetBanners } from '../../helpers/banners';
import { useGetAllEvents } from '../../helpers/events';
import { useGetAllDeals } from '../../helpers/deals';
import ListEventsWhatsOn from '../../components/views/whatsOn/ListEvents';
import ListDealsWhatsOn from '../../components/views/whatsOn/ListDeals';
import { NextSeo } from 'next-seo'
import { Text } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';

type Props = {
  banners?: any;
  events?: any;
  deals?: any;
  errors?: string;
};

const WhatsOnPage = ({  banners, events,deals}: Props) => {
  const colors = useColorTheme()
  return (<>
    <NextSeo
      title="What's On"
      description="This is What On Of i12 Katong"
      canonical="https://www.canonicalurl.ie/"
      openGraph={{
        url: 'https://www.canonicalurl.ie/',
        title: 'Home',
        description: `This is What's On Of i12 Katong`,
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
    <Banner  banner={banners.banner_whatson} url={banners.url_banner_whatson}/>
    <Text 
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                mt={{base:"25px",lg:"50px"}}
                mb={{base:"25px",lg:"50px"}}
                fontFamily="Playfair;">
                WHAT'S ON
            </Text>
    <ListEventsWhatsOn events={events}/>
    <ListDealsWhatsOn deals={deals} />

  
  </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {

  try {
    let banner = await useGetBanners();
    let event = await useGetAllEvents();
    let deal = await useGetAllDeals();
    return { props: { banners:banner,events:event, deals:deal}, revalidate: 10 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default WhatsOnPage;
