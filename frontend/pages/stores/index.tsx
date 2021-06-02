import React from 'react';
import { GetStaticProps } from 'next';
import { useGetAllStores,useGetAllCategories } from '../../helpers/stores';
import { NextSeo } from 'next-seo'
import { Text } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import ListStores from '../../components/views/stores/ListStores';

type Props = {
    stores?: any;
    categories?: any;
    errors?: string;
};

const StoresPage = ({ stores,categories }: Props) => {
    const colors = useColorTheme()
    return (<>
        <NextSeo
            title="Stores"
            description="This is Stores Of i12 Katong"
            canonical="https://www.canonicalurl.ie/"
            openGraph={{
                url: 'https://www.canonicalurl.ie/',
                title: 'Home',
                description: `This is Stores Of i12 Katong`,
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
        <ListStores stores={stores} categories={categories.Categories} />
    </>
    );
};

export const getStaticProps: GetStaticProps = async (context: any) => {

    try {
        let stores = await useGetAllStores();
        let categories = await useGetAllCategories();
        console.log(categories);
        
        return { props: { stores: stores, categories:categories }, revalidate: 10 };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default StoresPage;
