import React/*, { useState }*/ from 'react';

import {
    chakra,
    Box,
    Button,
    //BoxProps,
    Flex,
    Text,
    InputGroup,
    InputRightElement,
    Input,
    useColorModeValue,
    Spacer,
} from '@chakra-ui/react';
import styles from '../../constants/styles';
import {
    FaPaperPlane,
} from "react-icons/fa";
import { useFormik } from 'formik';

const SubscribeForm = (/*{...props }*/) => {
    const formik = useFormik({
        initialValues: {
            email:"",
        },
        onSubmit: async values => {

        },
    });
    return (
        <Box w="100%">
            <Flex
                bg={useColorModeValue('red', 'gray.800')}
                color={useColorModeValue('white', 'white')}
                minH={'90px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                // borderStyle={'solid'}
                // borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}
                maxW={styles.mainMaxWidth}
                mx={'auto'}>
                <Flex display={{ base: 'none', md: 'flex' }} flex={{ base: 1 }} justify={{ base: 'center', md: 'end' }}>
                    <Text color="primary" fontWeight="bold" margin=".5rem">
                        Get the lastest updates about out stories.
                    </Text>
                    <Text color="primary" ml="1px" mt=".5rem" >
                        Subscribe to our newsletter now!
                    </Text>
                    <Spacer />
                    <chakra.form w="30%" onSubmit={formik.handleSubmit}>
                        <InputGroup w="100%">
                            <InputRightElement
                                w="30%"
                                borderRadius={30}
                                bgColor="black"
                            >
                                <Button
                                    type="submit"
                                    zIndex="15"
                                    p={2}
                                    leftIcon={<FaPaperPlane />} colorScheme="black" variant="solid">
                                    SUBSCRIBE
                          </Button>
                            </InputRightElement>
                            <Input
                            id="email"
                            name="email"
                            onChange={formik.handleChange}
                                value={formik.values.email} bgColor="white" color="black" borderRadius={25} type="tel" placeholder="Enter Email Address" />
                        </InputGroup>
                    </chakra.form>
                </Flex>


            </Flex>
        </Box>
    );
};

export default SubscribeForm;