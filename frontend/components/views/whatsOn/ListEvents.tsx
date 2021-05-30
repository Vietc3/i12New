import { Box, Heading, SimpleGrid} from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import EventCard from '../../cards/EventCard';

type Props = {
    events: any;
    margin?: number;
    containerHeight?: number;
}

const ListEventsWhatsOn = ({
    events
}: Props) => {
    const colors = useColorTheme();
    return (
    <>
        <Box  as="section" pt="4%" pl={{base:'0px',lg:"60px"}} pr={{base:'0px',lg:"60px"}}>
            <Heading
                transition="ease-in 0.15s"
                fontSize="2xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish, sans-serif;">
                EVENTS
            </Heading>
            
            <SimpleGrid pt={3} columns={[1, null, 4]} spacing="5px" >
                {events.map((event: any) => (
                    <Box pt={{base:'5%',lg:'5%'}} key={'listEvent'+event.id} >
                        <EventCard
                            column
                            event={event}
                            idEvent={event.id}
                            titleFontSize={'1em'}
                        />
                    </Box>))}
            </SimpleGrid>

        </Box>
    </>
    )
}

export default ListEventsWhatsOn;