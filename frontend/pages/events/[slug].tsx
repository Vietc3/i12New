import { GetStaticProps } from 'next';
import { useGetAllEvents, useGetEventsByParams } from '../../helpers/events';
import { NextSeo, ArticleJsonLd } from 'next-seo'
import { useRouter } from 'next/router';
import { Box, Center, Text } from '@chakra-ui/react';
import EventDetails from '../../components/views/events/EventDeatails';
import OrtherEvents from '../../components/views/events/OrtherEvents';
import { useGetBanners } from '../../helpers/banners';
import Banner from '../../components/banner/Banner';


type Props = {
    banners?: any;
    event?: any;
    otherEvents?: any;
    morePosts?: any;
    errors?: string;
};

const EventDetail = ({ banners, event,otherEvents }: Props) => {
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
                title={event.title}
                description={event.summary}
                canonical={process.env.NEXT_PUBLIC_BASE_URL_CLIENT + `/events/${event.id}`}
                openGraph={{
                    url: process.env.NEXT_PUBLIC_BASE_URL_CLIENT + `/events/${event.id}`,
                    title: event.title,
                    description: event.summary,
                    images: [
                        {
                            url: process.env.NEXT_PUBLIC_BASE_URL + `${event.hero_desktop.url}`,
                            width: 800,
                            height: 600,
                            alt: 'Og Image Alt',
                        },
                        {
                            url: process.env.NEXT_PUBLIC_BASE_URL + `${event.hero_desktop.url}`,
                            width: 900,
                            height: 800,
                            alt: 'Og Image Alt Second',
                        },
                        { url: process.env.NEXT_PUBLIC_BASE_URL + `${event.hero_desktop.url}`, },
                        { url: process.env.NEXT_PUBLIC_BASE_URL + `${event.hero_desktop.url}`, },
                    ],
                }}
            />
            <ArticleJsonLd
                url={process.env.NEXT_PUBLIC_BASE_URL_CLIENT + `/events/${event.id}`}
                title={event.title}
                images={[
                    process.env.NEXT_PUBLIC_BASE_URL + `${event.hero_desktop.url}`
                ]}
                datePublished={event.published_at}
                dateModified={event.createdAt}
                authorName={event.title}
                publisherName={event.title}
                publisherLogo={process.env.NEXT_PUBLIC_BASE_URL + `${event.hero_desktop.url}`}
                description={event.title}
            />
            <Banner banner={banners.banner_event_details} url={banners.url_banner_event_details} />
            <EventDetails event={event} />
            <OrtherEvents events={otherEvents} />
        </>
    );
};

export default EventDetail;

export async function getStaticPaths() {
    let data = await useGetAllEvents();
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
        let data = await useGetEventsByParams(`id=${slug}`);
        let dataOrther = await useGetEventsByParams(`id_ne=${slug}&_sort=published_at`);
        
        return { props: { event: data[0], banners: banner, otherEvents:dataOrther  }, revalidate: 10 };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};
