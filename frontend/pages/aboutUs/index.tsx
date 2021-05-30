import React from 'react';
import Banner from '../../components/banner/Banner';
import Summary from '../../components/views/aboutUs/Summary';
import { GetStaticProps } from 'next';
import { useGetBanners } from '../../helpers/banners';
import { useGetContentAboutUs } from '../../helpers/about';
import { NextSeo } from 'next-seo'
import { Text } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import OurLocation from '../../components/views/aboutUs/OurLocation';
import GettingHere from '../../components/views/aboutUs/GettingHere';
import ConciergeServices from '../../components/views/aboutUs/ConciergeServices';
import Amentities from '../../components/views/aboutUs/Amentities';
type Props = {
  banners?: any;
  content?: any;
  errors?: string;
};

const AboutPage = ({ banners, content }: Props) => {
  const colors = useColorTheme()
  return (<>
    <NextSeo
      title="About"
      description="This is What On Of i12 Katong"
      canonical="https://www.canonicalurl.ie/"
      openGraph={{
        url: 'https://www.canonicalurl.ie/',
        title: 'About',
        description: 'This is about of i12 Katong',
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
    <Banner banner={banners.banner_about_us} url={banners.url_banner_about_us} />
    <Text
      transition="ease-in 0.15s"
      fontSize="5xl"
      bottom="30px"
      textAlign="center"
      color={colors.primary}
      mt={{ base: "25px", lg: "50px" }}
      mb={{ base: "25px", lg: "50px" }}
      fontFamily="Playfair;">
      About Us
    </Text>
    <Summary text={content.summary} />
    <OurLocation google_api={content.key_google_map} lat={content.lat_location} lng={content.long_location} />
    <GettingHere getting_by_bus={content.getting_by_bus} getting_by_train={content.getting_by_train} getting_by_car={content.getting_by_car}/>
    <ConciergeServices text={content.concierge_services}/>
    <Amentities wifi={content.amentities_wifi} nursing_room={content.amentities_nursing_room} charging_point={content.amentities_charging_point}/>
  </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {

  try {
      let banner = await useGetBanners();
    let contentAbout = await useGetContentAboutUs();
    return { props: { banners:banner, content:contentAbout}, revalidate: 10 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default AboutPage;
