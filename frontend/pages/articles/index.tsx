import React from 'react';
import Banner from '../../components/banner/Banner';
import { GetStaticProps } from 'next';
import { useGetBanners } from '../../helpers/banners';
import { NextSeo } from 'next-seo'
import { Text } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import { useGetAllArticles, useGetContentArticles } from '../../helpers/articles';
import Summary from '../../components/views/articles/Summary';
import ListArticles from '../../components/views/articles/ListArticles';

type Props = {
    banners?: any;
    content?: any;
    articles?: any;
    errors?: string;
};

const ArticlesPage = ({ banners, content, articles }: Props) => {
    const colors = useColorTheme()
    return (<>
        <NextSeo
            title="Articles"
            description="This is Articles on i12 Katong"
            canonical="https://www.canonicalurl.ie/"
            openGraph={{
                url: 'https://www.canonicalurl.ie/',
                title: 'Home',
                description: `This is Articles on i12 Katong`,
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
        <Banner banner={banners.banner_articles} url={banners.url_banner_articles} />
        <Text
            transition="ease-in 0.15s"
            fontSize="4xl"
            bottom="30px"
            textAlign="center"
            color={colors.primary}
            mt={{ base: "25px", lg: "50px" }}
            mb={{ base: "25px", lg: "35px" }}
            fontFamily="Playfair;">
            Articles
            </Text>
            <Summary text={content.summary} />
            <ListArticles articles={articles}/>


    </>
    );
};

export const getStaticProps: GetStaticProps = async (context: any) => {

    try {
        let banner = await useGetBanners();
        let content = await useGetContentArticles();
        let articles = await useGetAllArticles();
        return { props: { banners: banner, content: content, articles:articles}, revalidate: 10 };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default ArticlesPage;
