import { Box, Heading, SimpleGrid} from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import StoreCard from "../../cards/StoreCard";

type Props = {
    stores: any;
    margin?: number;
    containerHeight?: number;
}

const ListStores = ({
    stores
}: Props) => {
    return (
        <>
            <Box as="section" pt="4%" pl={{base:'0px',lg:"60px"}} pr={{base:'0px',lg:"60px"}}>
            <SimpleGrid pt={3} columns={[1, null, 4]} spacing="5px" >
                    {stores.map((store: any) => (
                        <Box pt={{base:'5%',lg:'10px'}} key={'listEvent' + store.id} >
                            <StoreCard
                                column
                                store={store}
                                idStore={store.id}
                                titleFontSize={'1em'}
                            />
                        </Box>))}
                </SimpleGrid>
               
            </Box>
        </>
    )
}

export default ListStores;