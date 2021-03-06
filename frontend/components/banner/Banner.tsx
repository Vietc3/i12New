import React, { useState } from 'react';
import { Box, BoxProps, useBreakpointValue } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import { useRouter } from 'next/router';
import Image from '../Image';
import Card from '../cards/Card';
import _ from 'lodash';
import { getUrlImage} from '../../helpers/commonFuction';


interface Props extends BoxProps {
    banner: any;
    column?: boolean;
    height?: number | string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
    url:string;
}

type FlexDirection = 'row' | 'column' | undefined;

const Banner = ({
    banner,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    url,
    ...props
}: Props) => {
    const colors = useColorTheme();
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });
    const onClickEvent = () => {
        window.open(url, '_blank');
    };

    return (
        <Card
            onClick={() => onClickEvent()}
            justifyContent="flex-start"
            cursor="pointer"
            overflow="hidden"
            display="flex"
            p="0px"
            {...props}
            flexDirection={flexDirection}
            color={colors.primary}
            w="100%"
        >
            <Box>
                <Image
                     width="100vw"
                     height="auto"
                     src={getUrlImage(banner.url)}
                    
                    // objectFit="cover"      
                />
            </Box>
        </Card>
    );
};

export default Banner;