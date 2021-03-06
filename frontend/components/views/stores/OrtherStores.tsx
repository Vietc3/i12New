import { Box, Heading,} from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import StoreCard from '../../cards/StoreCard';
import Slider from "react-slick";
import useWindowSize from '../../../hooks/useWindowSize';

type Props = {
    stores: any;
    margin?: number;
    containerHeight?: number;
}

const OrtherStores = ({
    stores
}: Props) => {
    
    const colors = useColorTheme();
    const screenSize = useWindowSize();

    const settings = screenSize.width >=950 ? {
        dots: true,
        infinite: true,
        slidesToShow: stores.length>=4 ? 4 : stores.length,
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
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear"
    }));
  
    return (
    <>
        <Box  as="section" mt={{base:"50px",lg:"80px"}} pl={{base:'0px',lg:"60px"}} pr={{base:'0px',lg:"60px"}}>
            <Heading
                transition="ease-in 0.15s"
                fontSize="2xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish, sans-serif;">
               You may also like
            </Heading>
            
            <Slider {...settings}>
                {stores.map((store: any) => (
                    <Box pt={{base:'5%',lg:'10%'}} key={'listEvent'+store.id} >
                       <StoreCard
                                column
                                store={store}
                                idStore={store.id}
                                titleFontSize={'1em'}
                            />
                    </Box>))}
            </Slider>
        </Box>
    </>
    )
}

export default OrtherStores;