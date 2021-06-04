import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import ArticleCard from '../../cards/ArticleCard';

type Props = {
    articles: any;
    margin?: number;
    containerHeight?: number;
}

const ListArticles = ({
    articles
}: Props) => {
    const colors = useColorTheme();
    return (
        <>
            <Box as="section" pt="4%" pl={{ base: '0px', lg: "60px" }} pr={{ base: '0px', lg: "60px" }}>


                <SimpleGrid pt={3} columns={[1, null, 4]} spacing="5px" >
                    {articles.map((article: any) => (
                        <Box pt={{ base: '5%', lg: '10px' }} key={'listEvent' + article.id} >
                            <ArticleCard
                                column
                                article={article}
                                idArticle={article.id}
                                titleFontSize={'1em'}
                            />
                        </Box>))}
                </SimpleGrid>

            </Box>
        </>
    )
}

export default ListArticles;