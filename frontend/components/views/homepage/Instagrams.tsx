import { Center, Box, Heading, Button, Icon} from "@chakra-ui/react";
import React from 'react';
import useColorTheme from '../../../hooks/useColorTheme';
import InstagramCard from '../../cards/InstagramCard';
import Slider from "react-slick";
import useWindowSize from '../../../hooks/useWindowSize';
import { FaInstagram } from "react-icons/fa";
type Props = {
    instagrams: any;
    margin?: number;
    containerHeight?: number;
}

const Instagrams = ({
    instagrams
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
        <Box  as="section" pt="4%" h="600px" mt="70px" bgColor="#004C45">
            <Center>
            <Icon as={FaInstagram} boxSize="4rem" mt={1}/>
            </Center>
      
            <Heading
                transition="ease-in 0.15s"
                fontSize="2xl"
                bottom="30px"
                textAlign="center"
                color={colors.primary}
                fontFamily="Mulish, sans-serif;">
                Follow us on instagram
            </Heading>
            
            <Slider {...settings}>
                {instagrams.data.data.map((data: any) => (
                    <Box pt="10%" key={'listEvent'+data.id} >
                        <InstagramCard
                            column
                            instagram={data.id}
                            titleFontSize={'1em'}
                            token={instagrams.token.access_token}
                        />
                    </Box>))}
            </Slider>
        </Box>
    </>
    )
}

export default Instagrams;