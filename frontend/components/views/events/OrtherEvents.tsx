import { Box, Heading,} from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import EventCard from '../../cards/EventCard';
import Slider from "react-slick";
import useWindowSize from '../../../hooks/useWindowSize';

type Props = {
    events: any;
    margin?: number;
    containerHeight?: number;
}

const ListEvents = ({
    events
}: Props) => {
    
    const colors = useColorTheme();
    const screenSize = useWindowSize();

    const settings = screenSize.width >=950 ? {
        dots: true,
        infinite: true,
        slidesToShow: events.length>=4 ? 4 : events.length,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    } :( screenSize.width >=750 ? {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    } :(screenSize.width >=400 ? {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }:{
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }));
  
    return (
    <>
        <Box  as="section" pl={{base:'0px',lg:"60px"}} pr={{base:'0px',lg:"60px"}}>
            <Heading
                transition="ease-in 0.15s"
                fontSize="4xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish, sans-serif;">
               Orther Events
            </Heading>
            
            <Slider {...settings}>
                {events.map((event: any) => (
                    <Box pt={{base:'5%',lg:'10%'}} key={'listEvent'+event.id} >
                        <EventCard
                            column
                            event={event}
                            idEvent={event.id}
                            titleFontSize={'1em'}
                        />
                    </Box>))}
            </Slider>
        </Box>
    </>
    )
}

export default ListEvents;