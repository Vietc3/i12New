import React from 'react';
import Banner from '../../components/banner/Banner';
import SimpleMap from '../../components/googleMap/GoogleMap';
import { GetStaticProps } from 'next';
import { useGetBanners } from '../../helpers/banners';
import { NextSeo } from 'next-seo'
import { Text } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
type Props = {
  banners?: any;
  errors?: string;
};

const AboutPage = ({  banners, }: Props) => {
  const colors = useColorTheme()
  return (<>
    <NextSeo
      title="About"
      description="This is What On Of i12 Katong"
      canonical="https://www.canonicalurl.ie/"
      openGraph={{
        url: 'https://www.canonicalurl.ie/',
        title: 'Home',
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
    <Banner  banner={banners.banner_about_us} url={banners.url_banner_about_us}/>
    <Text 
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                mt={{base:"25px",lg:"50px"}}
                mb={{base:"25px",lg:"50px"}}
                fontFamily="Playfair;">
                About Us
    </Text>
    <SimpleMap/>

  
  </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {

  try {
    let banner = await useGetBanners();
    return { props: { banners:banner}, revalidate: 10 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default AboutPage;
