import { GetStaticProps } from 'next';
import { useGetAllArticles, useGetArticlesByParams } from '../../helpers/articles';
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { useRouter } from 'next/router';
import { Box, Center, Text } from '@chakra-ui/react';
import ArticleDetails from '../../components/views/articles/ArticleDetails';

import { useGetBanners } from '../../helpers/banners';
import Banner from '../../components/banner/Banner';


type Props = {
    banners?: any;
    article?: any;
    otherArticles?: any;
    morePosts?: any;
    errors?: string;
};

const EventDetail = ({ banners, article,otherArticles }: Props) => {
    const router = useRouter();
    if (router.isFallback) {
        return <Box pl={{ base: '0px', lg: "70px" }}
            pr={{ base: '0px', lg: "70px" }} d="flex" flexDirection="column" flex="4" as="section" marginY={'.7em'}>
            <Center>
                <Text fontWeight="bold" fontSize="xl">Loading Page</Text>
            </Center>
        </Box>
    }
    
    return (
        <>
            <NextSeo
                title={article.article_name}
                description={article.article_name}
                canonical={process.env.NEXT_PUBLIC_BASE_URL_CLIENT + `/articles/${article.id}`}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_BASE_URL_CLIENT + `/articles/${article.id}`,
                    title: article.article_name,
                    description: article.article_name,
                    images: [
                        {
                            url: process.env.NEXT_PUBLIC_BASE_URL + `${article.hero_desktop.url}`,
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                        },
                        {
                            url: process.env.NEXT_PUBLIC_BASE_URL + `${article.hero_desktop.url}`,
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                        },
                        { url: process.env.NEXT_PUBLIC_BASE_URL + `${article.hero_desktop.url}`, },
                        { url: process.env.NEXT_PUBLIC_BASE_URL + `${article.hero_desktop.url}`, },
                    ],
                }}
            />
            <ArticleJsonLd
                url={process.env.NEXT_PUBLIC_BASE_URL_CLIENT + `/articles/${article.id}`}
                title={article.article_name}
                images={[
                    process.env.NEXT_PUBLIC_BASE_URL + `${article.hero_desktop.url}`
                ]}
                datePublished={article.published_at}
                dateModified={article.createdAt}
                authorName={article.artist_name}
                publisherName="i12 Katong"
                publisherLogo={process.env.NEXT_PUBLIC_BASE_URL + `${article.hero_desktop.url}`}
                description={article.article_name}
            />
            <Banner banner={banners.banner_article_details} url={banners.url_banner_article_details} />
            <ArticleDetails article={article} />
    
        </>
    );
};

export default EventDetail;

export async function getStaticPaths() {
    let data = await useGetAllArticles();
    const paths = data.map((article: any) => {
        return {
            params: {
                slug: article.id.toString()
            }
        }
    })
    return { paths, fallback: true }
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const slug = params?.slug;
        let banner = await useGetBanners();
        let data = await useGetArticlesByParams(`id=${slug}`);
        let dataOrther = await useGetArticlesByParams(`id_ne=${slug}&_sort=published_at`);
        
        return { props: { article: data[0], banners: banner, otherArticles:dataOrther  }, revalidate: 10 };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
