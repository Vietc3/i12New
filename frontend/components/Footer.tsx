import React from 'react';
import { Box, Center, /*Divider,*/ Flex, Text/*, useColorModeValue*/ } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../constants/styles';
import Logo from './Logo';
import useColorTheme from '../hooks/useColorTheme';
import { FOOTER_LINKS/*, FOOTER_BOTTOM_LINKS*/ } from '../constants';

interface Props {}

const Footer: React.FC<Props> = () => {
    const colors = useColorTheme();
  
    return (
        <Box
            as="footer"
            margin={0}
        
            boxShadow="lg"
            paddingX={{ base: '.4rem', md: '1rem' }}
            paddingTop="1.4rem"
            bgColor="white"
            color={colors.primary}
        >
            <Box maxW={styles.mainMaxWidth}  mx={'auto'} >
                <Flex
                    wrap="wrap"
                    w="100%"
                    direction={{ base: 'column', md: 'row' }}
                    pb="1.4rem"
                >
                        <Box padding={'2px'} _hover={{ textDecoration: 'underline' }} cursor="pointer">
                                <Link href="/">
                                <a>
                                    <Logo  src="/logofooter.PNG" />
                                    </a>
                                </Link>
                            </Box>
                    <Flex direction={{ base: 'column', md: 'row' }}>
              
                    </Flex>
                </Flex>
                <Center     borderTop="1px"
            borderColor={colors.primary} bgColor="white" textAlign="center" flexDirection={{ base: 'column', md: 'row' }} h={10} >
                    <Text fontSize={'.9rem'} color={colors.primary}>
                   © 2021 Keppel Land
                    </Text>
                </Center>
            </Box>
        </Box>
    );
};

export default Footer;
