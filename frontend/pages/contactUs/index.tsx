import React from 'react';
import Banner from '../../components/banner/Banner';
import { GetStaticProps } from 'next';
import { useGetBanners } from '../../helpers/banners';
import { NextSeo } from 'next-seo'
import useColorTheme from '../../hooks/useColorTheme';
import { Text } from '@chakra-ui/react';
import Summary from '../../components/views/contactUs/Summary';
import { useGetContentContactUs } from '../../helpers/contact';
type Props = {
  banners?: any;
  content?: any;
  errors?: string;
};

const ContactPage = ({  banners,content }: Props) => {

  const colors = useColorTheme();
  return (<>
    <NextSeo
      title="Contact Us"
      description="This is Contact Us Of i12 Katong"
      canonical="https://www.canonicalurl.ie/"
      openGraph={{
        url: 'https://www.canonicalurl.ie/',
        title: 'Contact Us',
        description: 'This is Contact Us Of i12 Katong',
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
    <Banner  banner={banners.banner_contact_us} url={banners.url_banner_contact_us}/>

    <Text
      transition="ease-in 0.15s"
      fontSize="5xl"
      bottom="30px"
      textAlign="center"
      color={colors.primary}
      mt={{ base: "25px", lg: "50px" }}
      mb={{ base: "25px", lg: "50px" }}
      fontFamily="Playfair;">
      Contact Us
    </Text>
      <Summary content={content} />
  
  </>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {

  try {
    let banner = await useGetBanners();
    let contentAbout = await useGetContentContactUs();
    return { props: { banners:banner, content:contentAbout}, revalidate: 10 };
  } catch (err) {
    return { props: { errors: err.message } };
  }
};

export default ContactPage;
