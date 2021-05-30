import { Box, Heading, SimpleGrid} from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import DealCard from '../../cards/DealCard';

type Props = {
    deals: any;
    margin?: number;
    containerHeight?: number;
}

const ListEventsWhatsOn = ({
    deals
}: Props) => {
    const colors = useColorTheme();
    return (
        <>
            <Box as="section" pt="4%" pl={{base:'0px',lg:"60px"}} pr={{base:'0px',lg:"60px"}}>
                <Heading
                    transition="ease-in 0.15s"
                    fontSize="2xl"
                    bottom="30px"
                    textAlign="center"
                    color={colors.primary}
                    fontFamily="Mulish, sans-serif;">
                    DEALS
            </Heading>

            <SimpleGrid pt={3} columns={[1, null, 4]} spacing="5px" >
                    {deals.map((deal: any) => (
                        <Box pt={{base:'5%',lg:'10px'}} key={'listEvent' + deal.id} >
                            <DealCard
                                column
                                deal={deal}
                                idDeal={deal.id}
                                titleFontSize={'1em'}
                            />
                        </Box>))}
                </SimpleGrid>
               
            </Box>
        </>
    )
}

export default ListEventsWhatsOn;