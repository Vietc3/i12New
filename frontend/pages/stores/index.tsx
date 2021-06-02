import React from 'react';
import Banner from '../../components/banner/Banner';
import { GetStaticProps } from 'next';
import { useGetAllStores } from '../../helpers/stores';
import { NextSeo } from 'next-seo'
import { Text } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import ListStores from '../../components/views/stores/ListStores';

type Props = {
    stores?: any;
    errors?: string;
};

const StoresPage = ({ stores }: Props) => {
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
        <Text
            transition="ease-in 0.15s"
            fontSize="4xl"
            bottom="30px"
            textAlign="center"
            color={colors.primary}
            mt={{ base: "25px", lg: "50px" }}
            mb={{ base: "25px", lg: "50px" }}
            fontFamily="Playfair;">
            STORES
            </Text>
        <ListStores stores={stores} />
    </>
    );
};

export const getStaticProps: GetStaticProps = async (context: any) => {

    try {
        let stores = await useGetAllStores();
        return { props: { stores: stores }, revalidate: 10 };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default StoresPage;
