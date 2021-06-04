import React, { useRef } from "react";
import {
    chakra,
    Box,
    Flex,
    Checkbox,
    useColorModeValue,
    SimpleGrid,
    GridItem,
    Link,
    Text,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Select,
    HStack,
    Icon,
    Button,
    VisuallyHidden,
} from "@chakra-ui/react";

import { URL_BASE } from '../../../constants';
import Markdown from "markdown-to-jsx";
import Image from '../../Image';
import useColorTheme from "../../../hooks/useColorTheme";
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import ReCAPTCHA from "react-google-recaptcha";
type Props = {
    content?: any;
};

const MyParagraph = ({ children, ...props }: any) => {
    return (
        <Link {...props}>{children}</Link>
    );
}


const MyIMG = ({ children, ...props }: any) => {
    return (
        <Box >
            <Image
                data-aos="fade-left"
                src={props.src}>{children}</Image>
        </Box>
    );
}

const Summary = ({ content }: Props) => {
    const colors = useColorTheme();
    const urlImageMarkdown = (text: string) => {
        return text.split('/uploads/').join(`${URL_BASE}/uploads/`);
    }
    const recaptchaRef = useRef('');

    const onReCAPTCHAChange = (captchaCode: string) => {
        // If the reCAPTCHA code is null or undefined indicating that
        // the reCAPTCHA was expired then return early
        if (!captchaCode) {
            return;
        }
        // Else reCAPTCHA was executed successfully so proceed with the 
        // alert
        alert(`Hey,Done}`);
        // Reset the reCAPTCHA so that it can be executed again if user 
        // submits another email.
        recaptchaRef.current.reset();
    }
    return (
        <>
            <Box pl={{ base: '0px', lg: "60px" }} pr={{ base: '0px', lg: "60px" }}>
                <Markdown options={{
                    overrides: {
                        a: {
                            component: MyParagraph,
                            props: {
                                color: 'blue',
                            },
                        },
                        img: {
                            component: MyIMG,
                        },
                    },
                }}>
                    {urlImageMarkdown(content.summary)}
                </Markdown>
                <Box pl={{ base: '0px', lg: "60px" }} pt={{ base: '30px', lg: "70px" }} pr={{ base: '0px', lg: "60px" }}>
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                        <Box>
                            <chakra.form
                                method="POST"
                                overflow={{ sm: "hidden" }}
                            >
                                <Stack


                                    spacing={10}

                                >
                                    <SimpleGrid columns={3} spacing={6}>
                                        <FormControl as={GridItem} colSpan={[3, 2]}>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                                color={useColorModeValue("gray.700", "gray.50")}
                                            >
                                                Name
                                            </FormLabel>

                                            <Input
                                                type="tel"
                                                placeholder="www.example.com"
                                                focusBorderColor="brand.400"
                                                w="100%"
                                            />

                                        </FormControl>
                                    </SimpleGrid>

                                    <SimpleGrid columns={3} spacing={6}>
                                        <FormControl as={GridItem} colSpan={[3, 2]}>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                                color={useColorModeValue("gray.700", "gray.50")}
                                            >
                                                Email Address
                                            </FormLabel>

                                            <Input
                                                type="tel"
                                                placeholder="john@doe.com"
                                                focusBorderColor="brand.400"
                                                w="100%"
                                            />

                                        </FormControl>
                                    </SimpleGrid>

                                    <SimpleGrid columns={3} spacing={6}>
                                        <FormControl as={GridItem} colSpan={[3, 2]}>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                                color={useColorModeValue("gray.700", "gray.50")}
                                            >
                                                Contact Number
                                            </FormLabel>

                                            <Input
                                                type="tel"
                                                placeholder="90123412"
                                                focusBorderColor="brand.400"
                                                w="100%"
                                            />

                                        </FormControl>
                                    </SimpleGrid>
                                    <SimpleGrid columns={3} spacing={6}>
                                        <FormControl as={GridItem} colSpan={[3, 2]}>
                                            <FormLabel
                                                for="country"
                                                fontSize="sm"
                                                fontWeight="md"
                                                color={useColorModeValue("gray.700", "gray.50")}
                                            >
                                                Type of Enquiry
                                            </FormLabel>
                                            <Select
                                                id="typeEnquiry"
                                                name="typeEnquiry"
                                                autoComplete="Type Of Enquiry"
                                                placeholder="General enquiries/feeback"
                                                mt={1}
                                                focusBorderColor="brand.400"
                                                shadow="sm"
                                                size="sm"
                                                rounded="md"
                                            >
                                                <option>United States</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </Select>
                                        </FormControl>
                                    </SimpleGrid>
                                    <SimpleGrid columns={3} spacing={6}>
                                        <FormControl as={GridItem} colSpan={[3, 2]}>
                                            <FormLabel
                                                fontSize="sm"
                                                fontWeight="md"
                                                color={useColorModeValue("gray.700", "gray.50")}
                                            >
                                                Upload attachments
                                            </FormLabel>
                                            <Flex
                                                mt={1}
                                                justify="center"
                                                px={6}
                                                pt={5}
                                                pb={6}
                                                borderWidth={2}
                                                borderColor={useColorModeValue("gray.300", "gray.500")}
                                                borderStyle="dashed"
                                                rounded="md"
                                            >
                                                <Stack spacing={1} textAlign="center">
                                                    <Icon
                                                        mx="auto"
                                                        boxSize={12}
                                                        color={useColorModeValue("gray.400", "gray.500")}
                                                        stroke="currentColor"
                                                        fill="none"
                                                        viewBox="0 0 48 48"
                                                        aria-hidden="true"
                                                    >
                                                        <path
                                                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                            strokeWidth="2"
                                                            strokLinecap="round"
                                                            strokeLinejoin="round"
                                                        />
                                                    </Icon>
                                                    <Flex
                                                        fontSize="sm"
                                                        color={useColorModeValue("gray.600", "gray.400")}
                                                        alignItems="baseline"
                                                    >
                                                        <chakra.label
                                                            for="file-upload"
                                                            cursor="pointer"
                                                            rounded="md"
                                                            fontSize="md"
                                                            color={useColorModeValue("brand.600", "brand.200")}
                                                            pos="relative"
                                                            _hover={{
                                                                color: useColorModeValue("brand.400", "brand.300"),
                                                            }}
                                                        >
                                                            <span>Upload a file</span>
                                                            <VisuallyHidden>
                                                                <input
                                                                    id="file-upload"
                                                                    name="file-upload"
                                                                    type="file"
                                                                />
                                                            </VisuallyHidden>
                                                        </chakra.label>
                                                        <Text pl={1}>or drag and drop</Text>
                                                    </Flex>
                                                    <Text
                                                        fontSize="xs"
                                                        color={useColorModeValue("gray.500", "gray.50")}
                                                    >
                                                        PNG, JPG, GIF up to 10MB
                                                    </Text>
                                                </Stack>
                                            </Flex>
                                        </FormControl>

                                    </SimpleGrid>
                                    <SimpleGrid columns={3} spacing={6}>
                                        <FormControl as={GridItem} colSpan={[3, 2]}>


                                            <Flex alignItems="start">
                                                <Flex alignItems="center" h={5}>
                                                    <Checkbox colorScheme="green" defaultIsChecked>
                                                      
                                                    </Checkbox>
                                                </Flex>
                                                <Box ml={3} fontSize="sm">
                                                    <Text color={useColorModeValue("gray.500", "gray.400")}>
                                                        I agree to the Data Protection Statement. The Data Protection Statement
                                                        containt important information on the types of data collected and now
                                                        the may be used, including for purposes of data analytics
                                                </Text>

                                                </Box>
                                            </Flex>
                                        </FormControl>
                                    </SimpleGrid>
                                    <Box>
                                        <ReCAPTCHA
                                            ref={recaptchaRef}
                                            sitekey={content.reCaptcha_site_key}
                                            onChange={onReCAPTCHAChange}
                                        />
                                    </Box>

                                    <Button w="40%" borderRadius={20} bgColor={colors.primary} color="white" variant="solid">
                                        Submit
                                    </Button>
                                </Stack>

                            </chakra.form>
                        </Box>

                        <Stack spacing="60px" >
                            <Box>
                                <HStack spacing="10px">
                                    <Icon color={colors.primary} as={FaMapMarkerAlt} boxSize="2rem" />
                                    <Text
                                        transition="ease-in 0.15s"
                                        fontSize="xl"
                                        fontWeight="bold"
                                        bottom="30px"
                                        textAlign="center"
                                        color={colors.primary}
                                        mt={{ base: "25px", lg: "50px" }}
                                        mb={{ base: "25px", lg: "50px" }}
                                    >
                                        Mall Address
                            </Text>
                                </HStack>
                                <Box mt={5}>
                                    <Markdown options={{
                                        overrides: {
                                            a: {
                                                component: MyParagraph,
                                                props: {
                                                    color: 'blue',
                                                },
                                            },
                                            img: {
                                                component: MyIMG,
                                            },
                                        },
                                    }}>
                                        {urlImageMarkdown(content.mall_address)}
                                    </Markdown>
                                </Box>
                            </Box>
                            <Box>
                                <HStack spacing="10px">
                                    <Icon color={colors.primary} as={FaPhoneAlt} boxSize="2rem" />
                                    <Text
                                        transition="ease-in 0.15s"
                                        fontSize="xl"
                                        fontWeight="bold"
                                        bottom="30px"
                                        textAlign="center"
                                        color={colors.primary}
                                        mt={{ base: "25px", lg: "50px" }}
                                        mb={{ base: "25px", lg: "50px" }}
                                    >
                                        Mall Customer Service Phone Number
                            </Text>
                                </HStack>
                                <Box mt={5}>
                                    <Markdown options={{
                                        overrides: {
                                            a: {
                                                component: MyParagraph,
                                                props: {
                                                    color: 'blue',
                                                },
                                            },
                                            img: {
                                                component: MyIMG,
                                            },
                                        },
                                    }}>
                                        {urlImageMarkdown(content.phone_customer_service)}
                                    </Markdown>
                                </Box>

                            </Box>
                            <Box>
                                <HStack spacing="10px">
                                    <Icon color={colors.primary} as={FaClock} boxSize="2rem" />
                                    <Text
                                        transition="ease-in 0.15s"
                                        fontSize="xl"
                                        fontWeight="bold"
                                        bottom="30px"
                                        textAlign="center"
                                        color={colors.primary}
                                        mt={{ base: "25px", lg: "50px" }}
                                        mb={{ base: "25px", lg: "50px" }}
                                    >
                                        Customer Service Counter Operating Hours
                            </Text>
                                </HStack>
                                <Box mt={5}>
                                    <Markdown options={{
                                        overrides: {
                                            a: {
                                                component: MyParagraph,
                                                props: {
                                                    color: 'blue',
                                                },
                                            },
                                            img: {
                                                component: MyIMG,
                                            },
                                        },
                                    }}>
                                        {urlImageMarkdown(content.counter_operating_hours)}
                                    </Markdown>
                                </Box>
                            </Box>
                        </Stack>
                    </SimpleGrid>
                </Box>
            </Box>

        </>
    )
}

export default Summary;