import React from 'react';
import Banner from '../../components/banner/Banner';
import { GetStaticProps } from 'next';
import { useGetBanners } from '../../helpers/banners';
import { NextSeo } from 'next-seo'

type Props = {
  banners?: any;
  errors?: string;
};

const ContactPage = ({  banners, }: Props) => {
  return (<>
    <NextSeo
      title="What's On"
      description="This is What On Of i12 Katong"
      canonical="https://www.canonicalurl.ie/"
      openGraph={{
        url: 'https://www.canonicalurl.ie/',
        title: 'Home',
        description: 'This is What On Of i12 Katong',
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

export default ContactPage;
