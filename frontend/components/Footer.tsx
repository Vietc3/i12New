import React from 'react';
import { Box, Center, /*Divider,*/ Flex, Spacer, Text,Icon, VStack } from '@chakra-ui/react';
import Link from 'next/link';
import styles from '../constants/styles';
import Logo from './Logo';
import useColorTheme from '../hooks/useColorTheme';
import { FOOTER_LINKS, SOCIAL_LINKS} from '../constants';

import { FaFacebookF,FaInstagram,FaTwitter } from "react-icons/fa";
interface Props { }

const Footer: React.FC<Props> = () => {
    const colors = useColorTheme();

    return (
        <Box
            as="footer"
            margin={0}
          
            boxShadow="lg"
           
            paddingTop="1.4rem"
            bgColor="white"
            color={colors.primary}
        >
            <Box maxW={styles.mainMaxWidth}   pl={{base:'0px',lg:"60px"}} pr={{base:'0px',lg:"60px"}} mx={'auto'} >
                <Flex
                    wrap="wrap"
                    w="100%"
                    direction={{ base: 'column', md: 'row' }}
                    pb="1.4rem"
                >
                    <Box padding={'2px'} _hover={{ textDecoration: 'underline' }} cursor="pointer">
                        <Link href="/">
                            <a>
                                <Logo src="/logofooter.PNG" />
                            </a>
                        </Link>
                    </Box>
                    <VStack
                    pt={10}
                    pl={{base:"0", lg:"10px"}}
                        spacing={4}
                        align="stretch"
                    >{
                            FOOTER_LINKS.map(({ heading, link }: any) => {
                                return (
                                <Box textAlign="left" key={heading}  >
                                    <Link href={link}>
                                        <Text  fontSize={'1rem'} color={colors.primary}
                                            cursor="pointer"
                                            _hover={{ color:colors.primary, textDecoration: 'underline' }}>{heading}</Text>
                                    </Link>
                                </Box>)
                            })

                        }


                    </VStack>
                    <Spacer/>
                    <VStack
                    pt={10}
                   
                        spacing={4}
                        align="stretch"
                    > <Text fontSize={'15px'} 
                    fontWeight="bold"
                    color={colors.primary}>
                    Follow Us
                    </Text>
                        {
                            SOCIAL_LINKS.map(({ heading, link }: any) => {
                                return (
                                <Flex textAlign="left" key={heading} >
                                    {
                                      heading==="Facebook" ?  <Icon as={FaFacebookF} boxSize="1rem" mt={1}/> : (heading==="Instagram"?<Icon as={FaInstagram} boxSize="1rem" mt={1}/>:
                                      <Icon as={FaTwitter} boxSize="1rem" mt={1}/>)
                                    }
                                    
                                    <Link href={link}>
                                        <Text  fontSize={'1rem'} pl="2px" color={colors.primary}
                                            cursor="pointer"
                                            _hover={{ color:colors.primary, textDecoration: 'underline' }}>{heading}</Text>
                                    </Link>
                                </Flex>)
                            })
                        }
                    </VStack>


                </Flex>
                <Center borderTop="1px"
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
