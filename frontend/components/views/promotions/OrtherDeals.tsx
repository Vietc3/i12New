import { Box, Heading,} from "@chakra-ui/react";
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

const ListDeals = ({
    deals
}: Props) => {
    
    const colors = useColorTheme();
    const screenSize = useWindowSize();

    const settings = screenSize.width >=950 ? {
        dots: true,
        infinite: true,
        slidesToShow: deals.length>=4 ? 4 : deals.length,
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
        <Box  as="section" pl={{base:'0px',lg:"60px"}} pt={{base:'30px',lg:"60px"}} pr={{base:'0px',lg:"60px"}}>
            <Heading
                transition="ease-in 0.15s"
                fontSize="2xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish, sans-serif;">
               Orther Deals
            </Heading>
            
            <Slider {...settings}>
                {deals.map((deal: any) => (
                    <Box pt={{base:'5%',lg:'10%'}} key={'listEvent'+deal.id} >
                        <DealCard
                            column
                            deal={deal}
                            idDeal={deal.id}
                            titleFontSize={'1em'}
                        />
                    </Box>))}
            </Slider>
        </Box>
    </>
    )
}

export default ListDeals;