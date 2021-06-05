import React, { useState } from 'react';
import { Box, BoxProps, Text, useBreakpointValue,Icon,Flex } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import { useRouter } from 'next/router';
import Image from '../Image';
import Card from './Card';
import _ from 'lodash';
import moment from 'moment';
import { getUrlImage } from '../../helpers/commonFuction';
import { AiFillCalendar } from "react-icons/ai";

interface Props extends BoxProps {
    event: any;
    column?: boolean;
    height?: number | string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
    idEvent?: string;
}

type FlexDirection = 'row' | 'column' | undefined;

const EventCard = ({
    event,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    idEvent,
    ...props
}: Props) => {
    const [hover, setHover] = useState(false);
    const colors = useColorTheme();
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });
    const vaildForm = moment(event.start_date).format("Do MMM");
    const validTo = moment(event.end_date).format("Do MMM");
    const router = useRouter();
    const onClickEvent = () => {
        router.push(`/events/${idEvent}`);
        window.scrollTo(0, 0);
    };

    return (
        <Card
            onClick={() => onClickEvent()}
            justifyContent="flex-start"
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ transform: `scale(${hover ? 1.1 : 1})` }}
            transition="ease-in 0.2s"
            overflow="hidden"
            display="flex"
            {...props}
            flexDirection={flexDirection}
            color={colors.primary}
        >
            <Box  display={{ base: 'none', lg: 'flex' }}>
                <Image
                     width="100%"
                     height={{ base: 40,md:35, lg: 60 }}
                     src={getUrlImage(event.hero_desktop.url)}
                    alt={'Photo of ' + event.title}
                    // objectFit="cover"      
                />
            </Box>
            <Box  display={{ base: 'flex', lg: 'none' }}>
             
                <Image
                     width="100%"
                     height={40}
                     src={getUrlImage(event.hero_mobile.url)}
                    alt={'Photo of ' + event.title}
                    // objectFit="cover" 
                />
            </Box>
            <Box mt={{ base: 4, md: 4 }}  color={colors.primary}>
                <Box h="50px">
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="15px"
                    letterSpacing="wide"
                >
                    {event.title}
                </Text>
                </Box>
               
                <Flex >
                <Icon as={AiFillCalendar} boxSize="2rem" mt={1}/>
                <Text pl={1} mt={2} fontSize="md" >
                    {`${vaildForm}-${validTo}`}
                </Text>

                </Flex>
                
                {/* <Text
                    mt={1}
                    display="block"
                    fontSize="lg"
                    lineHeight="normal"
                    fontWeight="semibold"
                    href="#"
                >
                    {_.upperFirst(post.sumary)}
                </Text> */}

            </Box>
        </Card>
    );
};

export default EventCard;