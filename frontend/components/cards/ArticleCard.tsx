import React, { useState } from 'react';
import { Box, BoxProps, Text, useBreakpointValue, Icon, Flex } from '@chakra-ui/react';
import useColorTheme from '../../hooks/useColorTheme';
import styles from '../../constants/styles';
import { useRouter } from 'next/router';
import Image from '../Image';
import Card from './Card';
import _ from 'lodash';
import moment from 'moment';
import { getUrlImage } from '../../helpers/commonFuction';
import { AiFillCalendar } from "react-icons/ai";

interface Props extends BoxProps {
    article: any;
    column?: boolean;
    height?: number | string;
    skeleton?: boolean;
    imgBoxSize?: string | number;
    titleFontSize?: number | string;
    idArticle?: string;
}

type FlexDirection = 'row' | 'column' | undefined;

const ArticleCard = ({
    article,
    column = false,
    imgBoxSize,
    skeleton = false,
    titleFontSize = '1.4rem',
    idArticle,
    ...props
}: Props) => {
    const [hover, setHover] = useState(false);
    const colors = useColorTheme();
    const flexDirection: FlexDirection = useBreakpointValue({ base: 'column', md: column ? 'column' : 'row' });
    const router = useRouter();
    const onClickEvent = () => {
        router.push(`/articles/${idArticle}`);
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
            h="100%"
            display="flex"
            {...props}
            flexDirection={flexDirection}
            color={colors.primary}
        >
            <Box display={{ base: 'none', lg: 'flex' }}>
                <Image
                    width="100%"
                    height={{ base: 40,md:40, lg: 60 }}
                    src={getUrlImage(article.hero_desktop.url)}
                    alt={'Photo of ' + article.article_name}
                // objectFit="cover"      
                />
            </Box>
            <Box display={{ base: 'flex', lg: 'none' }}>

                <Image
                    width="100%"
                    height={{ base: 60 }}
                    src={getUrlImage(article.hero_mobile.url)}
                    alt={'Photo of ' + article.article_name}
                // objectFit="cover" 
                />
            </Box>
            <Box mt={{ base: 4, md: 4 }} color={colors.primary}>
                <Box >
                    <Text
                        fontWeight="bold"
                        fontSize="15px"
                        letterSpacing="wide"
                    >
                        {article.article_name}
                    </Text>
                </Box>
                <Box >
                    <Text
                        fontSize="15px"
                        letterSpacing="wide"
                    >
                        {article.artist_name}
                    </Text>
                </Box>
            </Box>
        </Card>
    );
};

export default ArticleCard;