import {
    Box,
    Flex,
    Text,
    IconButton,
    InputGroup,
    InputRightElement,
    Input,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Spacer,
    Button,
    chakra, HStack

} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
} from '@chakra-ui/icons';
import {
    AiOutlineSearch,
    AiFillFacebook,
    AiOutlineInstagram,
    AiFillTwitterSquare, AiFillYoutube
} from "react-icons/ai";
import styles from '../../constants/styles';
import { useFormik } from 'formik';
import { useRecoilState } from 'recoil';
import useWindowSize from '../../hooks/useWindowSize';
import useColorTheme from '../../hooks/useColorTheme';
import { SearchKeyword } from '../../recoil/search';
import { useRouter } from 'next/router';
import Logo from '../Logo';
import React, { useState, useEffect } from 'react';
import Styles from '../../styles';
import { useUrlSocial } from '../../helpers/contentFooter';




export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();
    const [OpenSearch, setOpenSearch] = useState(false);
    const [urlButton, setUrlButton] = useState({
        facebook: "facebook.com", instagram: "instagram.com", youtube: "youtube.com", twitter: "google.com"
    });

    const [searchKeyword, setSearchKeyword] = useRecoilState(SearchKeyword);

   const colors =useColorTheme();
    
    useEffect(() => {
        useUrlSocial().then(res => setUrlButton(res)
        )
    }, [])


    const router = useRouter();
    const onClick = () => {
        router.push(`/search`);
    };
    const onClickSubscribe = () => {
       isOpen? onToggle() : null
        router.push(`/subscribe`);
    };

    const onClickSocial = (url: string) => {
        window.open(url, '_blank');
    };


    const formik = useFormik({
        initialValues: {
            keyword: searchKeyword,
        },
        onSubmit: async values => {
            setSearchKeyword(values.keyword);
            OpenSearch ? setOpenSearch(!OpenSearch) :null;
            onClick();
        },
    });

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={colors.primary}
                minH={'90px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                // borderStyle={'solid'}
                // borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                maxW={styles.mainMaxWidth}
                mx={'auto'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    pt={2}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={10} h={10} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 10}} justify={{ base: 'left', md: 'start' }}>

                    <Button display={{ base: 'none', md: 'flex' }} variant="ghost">
                        <Link href="/">
                            <Logo w="100%" src="/logo.PNG"/>
                        </Link>
                    </Button>

                    <Button display={{ base: 'flex', md: 'none' }} variant="ghost">
                        <Link href="/">
                            <Logo w="80%" h="80%" src="/logo.PNG" />
                        </Link>
                    </Button>
            
                    <Flex display={{ base: 'none', md: 'flex' }} w="100%" >
                        <DesktopNav />
                    </Flex>
                    
                </Flex>

                <Flex  pt={3} flex={{ base: 1 }} justify={{ base: 'center', md: 'end' }}>
                <Spacer></Spacer>
                <Stack
                display={{ base: 'flex',md:'flex', lg: 'flex' }}
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}
                    pr={1}>
                    <IconButton
                        onClick={() => setOpenSearch(!OpenSearch)}
                        icon={
                            <Icon as={AiOutlineSearch} boxSize={{ base: '2rem', lg: '3rem' }} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />

                </Stack>
                </Flex>
            </Flex>


            <Collapse in={isOpen} animateOpacity>
                <MobileNav urlButtonSocial={urlButton} onClickSocial={(url: string) => {
                     onToggle()
                     onClickSocial(url)
                }} onClickSubscribe={() => onClickSubscribe()} />
            </Collapse>
            <Collapse  in={OpenSearch} animateOpacity>
                <Box  pl={{base:2,md:5,lg:"auto"}} pr={{base:2,md:5,lg:"auto"}} maxW={styles.mainMaxWidth} style={{ paddingTop: '0px !important' }} marginX="auto" mb={2}  flex={{ base: 1 }} justify={{ base: 'center', md: 'end' }}>
                    <Flex>
                        <Spacer />
                        <IconButton
                            onClick={() => setOpenSearch(!OpenSearch)}
                            icon={
                                <CloseIcon />
                            }
                            variant={'ghost'}
                            aria-label={'Toggle Navigation'}
                        />
                    </Flex>


                    <chakra.form onSubmit={formik.handleSubmit}>
                        <InputGroup w="100%">
                            <InputRightElement
                                w="15%"
                                bgColor="black"
                            >
                                <Button
                                    type="submit"
                                    zIndex="15"
                                    leftIcon={<AiOutlineSearch />} colorScheme="black" variant="solid">
                                </Button>
                            </InputRightElement>
                            <Input
                                id="keyword"
                                name="keyword"
                                onChange={formik.handleChange}
                                value={formik.values.keyword} bgColor="white" color="black" type="tel" placeholder="Search Keyword" />
                        </InputGroup>
                    </chakra.form>
                </Box>
            </Collapse>
        </Box>

    );
}

const DesktopNav = () => {
    const screenSize = useWindowSize();
    const colors =useColorTheme();
    return (
        <Stack direction={'row'} pt="1%">
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}  _focus={{borderBottom:"1.5px solid #A68340", borderTop:"0px", borderLeft:"0px", borderRight:"0px"}}>
                    <Popover trigger={'hover'} placement={'bottom-start'} >
                        <PopoverTrigger>
                            <Link
                            _focus={{borderBottom:"1.5px solid #A68340", borderTop:"0px", borderLeft:"0px", borderRight:"0px"}}
                                p={2}
                                href={navItem.href ?? '#'}
                                fontSize={ screenSize.width <=1168 ? (screenSize.width <=918 ? "7px" : "10px"):"15px"}
                                fontWeight={800}
                                color={colors.primary}
                                _hover={{
                                    textDecoration: 'none',
                                    color: useColorModeValue('gray', 'white'),
                                }}>
                                {navItem.label}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={useColorModeValue('white', 'gray.800')}
                                p={4}
                                rounded={'xl'}
                                minW={'sm'}>
                                <Stack >
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href }: NavItem) => {
    return (
        <Link
            href={href}
            // role={'group'}
            // display={'block'}
            p={2}
            fontWeight="bold"
            fontFamily={'heading'}
            // rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Text
                textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                fontWeight="bold"
             >
                {label}
            </Text>

        </Link>
    );
};


type PropsMobileNav = {
    onClickSubscribe?: any;
    onClickSocial?: any;
    urlButtonSocial?: any;
}

const MobileNav = ({ onClickSubscribe, onClickSocial, urlButtonSocial }: PropsMobileNav) => {
    const colors =useColorTheme();
    return (
        <Stack
            bg={useColorModeValue('white', 'gray.800')}
            p={4}
            display={{ md: 'none' }}
            h="100vh">
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}

            <HStack
                spacing="0"
            >
                <IconButton
                    w="15%"
                    onClick={() => onClickSocial(urlButtonSocial.facebook)}
                    icon={
                        <AiFillFacebook color={colors.primary} size="md" />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                <IconButton
                    w="15%"
                    onClick={() => onClickSocial(urlButtonSocial.instagram)}
                    icon={
                        <AiOutlineInstagram color={colors.primary} size="md" />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                <IconButton
                    w="15%"
                    onClick={() => onClickSocial(urlButtonSocial.twitter)}
                    icon={
                        <AiFillTwitterSquare color={colors.primary} size="md" />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />
                <IconButton
                    w="15%"
                    onClick={() => onClickSocial(urlButtonSocial.youtube)}
                    icon={
                        <AiFillYoutube color={colors.primary} size="md" />
                    }
                    variant={'ghost'}
                    aria-label={'Toggle Navigation'}
                />

            </HStack>
            {/* <Stack

                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={3}
                >
                    <IconButton

                        icon={
                            <AiOutlineInstagram color="black" size="md" />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />

                </Stack>
                <Stack

                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={3}
                >

                </Stack>
                <Stack
                    justify={'flex-end'}
                    direction={'row'}
                    flex={{ base: 1, md: 0 }}
                >
                    <IconButton
                        icon={
                            <AiFillYoutube color="black" size="md" />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Stack> */}


        </Stack>
    );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
    const colors =useColorTheme();

    return (
        <Stack spacing={4} onClick={children && onToggle}>
            <Flex
                py={2}
                as={Link}
                href={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontSize={'lg'}
                    fontWeight={800}
                    color={colors.primary}
                    _hover={{
                        textDecoration: 'none',
                        color: useColorModeValue('gray', 'white'),
                    }}>
                    {label}
                </Text>
                {children && (
                    <Icon
                        as={ChevronDownIcon}
                        transition={'all .25s ease-in-out'}
                        transform={isOpen ? 'rotate(180deg)' : ''}
                        w={6}
                        h={6}
                    />
                )}
            </Flex>

            <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
                <Stack
                    mt={2}
                    pl={4}
                    borderLeft={1}
                    borderStyle={'solid'}
                    borderColor={useColorModeValue('gray.200', 'gray.700')}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>
        </Stack>
    );
};

interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [

    {
        label: `WHAT'S ON`,
        href: `/whatsOn`,
    },
    {
        label: 'STORE DIRECTORY',
        href: '/stores',
    },
    {
        label: 'REWARDS',
        href: '/rewards',
    },
    {
        label: 'ARTS AT i12 KATONG',
        href: '/articles',
    },
    {
        label: 'ABOUT US',
        href: '/aboutUs',
    },
    {
        label: 'CONTACT US',
        href: '/contactUs',
    }
    // {
    //     label: 'PLAYITRIGHT STORE',
    //     href: process.env.NEXT_PUBLIC_BASE_URL_SALES_PRODUCT
    // },
];