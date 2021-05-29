import { Box, Heading, Button, Center } from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import DealCard from '../../cards/DealCard';
import Slider from "react-slick";
import useWindowSize from '../../../hooks/useWindowSize';

type Props = {
    deals: any;
    margin?: number;
    containerHeight?: number;
}

const ListEvents = ({
    deals
}: Props) => {

    const colors = useColorTheme();
    const screenSize = useWindowSize();
    const settings = screenSize.width >=950 ? {
        dots: true,
        infinite: true,
        slidesToShow: 4,
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
    } :(screenSize.width >=350 ? {
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
            <Box as="section" pt="4%">
                <Heading
                    transition="ease-in 0.15s"
                    fontSize="4xl"
                    bottom="30px"
                    textAlign="center"
                    color={colors.primary}
                    fontFamily="Mulish, sans-serif;">
                    DEALS
            </Heading>

                <Slider {...settings}>
                    {deals.map((deal: any) => (
                        <Box pt="10%" key={'listEvent' + deal.id} >
                            <DealCard
                                column
                                deal={deal}
                                idDeal={deal.id}
                                titleFontSize={'1em'}
                            />
                        </Box>))}
                </Slider>
                <Center mt={10}>
                    <Button bgColor="white" borderRadius={30} border="1px" borderColor={colors.primary}>
                       View All Deals
                    </Button>
                </Center>


            </Box>
        </>
    )
}

export default ListEvents;