import React, { useState } from 'react';
import { Box, BoxProps, Text, useBreakpointValue, Icon, HStack } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import { useRouter } from 'next/router';
import Image from '../Image';
import Card from './Card';
import _ from 'lodash';
import { getUrlImage } from '../../helpers/commonFuction';
import { FaStar,FaGlobe,FaMoneyBill } from "react-icons/fa";

interface Props extends BoxProps {
    store: any;
    column?: boolean;
    height?: number | string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
    idStore?: string;
}

type FlexDirection = 'row' | 'column' | undefined;

const StoreCard = ({
    store,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    idStore,
    ...props
}: Props) => {
    const [hover, setHover] = useState(false);
    const colors = useColorTheme();
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });
    const router = useRouter();
    const onClickEvent = () => {
        router.push(`/stores/${idStore}`);
        window.scrollTo(0, 0);
    };

    return (
        <Card
            onClick={() => onClickEvent()}
            justifyContent="flex-start"
            cursor="pointer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ transform: `scale(${hover ? 1.05 : 1})` }}
            transition="ease-in 0.2s"
            overflow="hidden"
            h="100%"
            display="flex"
            {...props}
            flexDirection={flexDirection}
            color={colors.primary}
        >
            <Box display={{ base: 'none', lg: 'flex' }} border="1px" borderColor="gray.300">
                <Image
                    width="100%"
                    height={{ base: 40,md:35, lg: 60 }}
                    src={getUrlImage(store.hero_desktop.url)}
                    alt={'Photo of ' + store.name}
                    objectFit="cover"
                />
            </Box>
            <Box display={{ base: 'flex', lg: 'none' }} border="1px" borderColor="gray">

                <Image
                    width="100%"
                    height={{ base: 40 }}
                    src={getUrlImage(store.hero_mobile.url)}
                    alt={'Photo of ' + store.name}
                    objectFit="cover"
                />
            </Box>
            <Box mt={{ base: 4, md: 4 }} color={colors.primary}>
                <Box h="50px">
                    <Text
                        fontWeight="bold"
                        textTransform="uppercase"
                        fontSize="15px"
                        letterSpacing="wide"
                    >
                        {store.name}
                    </Text>
                </Box>

                <Box h="50px">
                    <Text
                        textTransform="uppercase"
                        fontSize="15px"
                        letterSpacing="wide"
                    >
                        {store.location}
                    </Text>
                    <Text
                        fontSize="15px"
                        letterSpacing="wide"
                    >
                        {store.category}
                    </Text>
                   
                </Box>
                <HStack mt={5} spacing="10px">
                      {store.accept_rewards_points ? <Icon borderRadius="50%" color="#004c45" as={FaStar} boxSize="1.5rem" /> : null}
                      {store.accept_e_voucher ? <Icon borderRadius="50%" color="#004c45" as={FaGlobe} boxSize="1.5rem" /> : null}
                      {store.accept_shop_online ? <Icon borderRadius="50%" color="#004c45" as={FaMoneyBill} boxSize="1.5rem" /> : null}

                    </HStack>


            </Box>
        </Card>
    );
};

export default StoreCard;