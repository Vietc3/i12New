import React, { useState } from 'react';
import { Box, BoxProps, useBreakpointValue,Icon } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import styles from '../../constants/styles';
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
    const [hover, setHover] = useState(false);
    const colors = useColorTheme();
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });
    const router = useRouter();
    const onClickEvent = () => {
        window.location.replace(url);
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
            mt={5}
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