import React, { useState } from 'react';
import { Box, BoxProps, Text, useBreakpointValue,Icon,Flex } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import styles from '../../constants/styles';
import { useRouter } from 'next/router';
import Image from '../Image';
import Card from './Card';
import _ from 'lodash';
import moment from 'moment';
import { getUrlImage} from '../../helpers/commonFuction';
import { AiFillCalendar } from "react-icons/ai";

interface Props extends BoxProps {
    deal: any;
    column?: boolean;
    height?: number | string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
    idDeal?: string;
}

type FlexDirection = 'row' | 'column' | undefined;

const DealCard = ({
    deal,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    idDeal,
    ...props
}: Props) => {
    const [hover, setHover] = useState(false);
    const colors = useColorTheme();
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });
    const vaildForm = moment(deal.start_date).format("Do MMM");
    const validTo = moment(deal.end_date).format("Do MMM");
    const router = useRouter();
    const onClickEvent = () => {
        router.push(`/deals/${idDeal}`);
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
            marginY=".5rem"
            display="flex"
            {...props}
            flexDirection={flexDirection}
            color={colors.primary}
        >
            <Box  display={{ base: 'none', lg: 'flex' }}>
                <Image
                     width={{ base: '60%', lg: column ? '100%' : 60 }}
                     height={{ base: 80, lg: column ? '15rem' : 40 }}
                     src={getUrlImage(deal.hero_desktop.url)}
                    alt={'Photo of ' + deal.title}
                    // objectFit="cover"      
                />
            </Box>
            <Box  display={{ base: 'flex', lg: 'none' }}>
             
                <Image
                     width={{ base: '60%', lg: column ? '100%' : 60 }}
                     height={{ base: 80, lg: column ? '15rem' : 40 }}
                     src={getUrlImage(deal.hero_mobile.url)}
                    alt={'Photo of ' + deal.title}
                    // objectFit="cover"
                    borderRadius={styles.borderRadius}
                   
                />
            </Box>
            <Box mt={{ base: 4, md: 4 }}  color={colors.primary}>
                <Text
                    fontWeight="bold"
                    textTransform="uppercase"
                    fontSize="sm"
                    letterSpacing="wide"

                >
                    {deal.title}
                </Text>
                <Flex pt={5}>
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

export default DealCard;