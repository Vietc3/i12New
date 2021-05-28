import {
    chakra,
    Box,
    useColorModeValue,
    Spacer,
    Center,
    Stack,
    FormControl,
    FormLabel,
    Input,
    Button
} from "@chakra-ui/react";
import { useFormik } from 'formik';

import {useSubscriber} from '../../../helpers/subscribers';
const FormSubscribe = () => {
    const formik = useFormik({
        initialValues: {
            email:"",
            firstName:"",
            lastName:""
        },
        onSubmit: async values => {
            useSubscriber(values)
        },
    });



    return (
        <Box
            bg="white"
            py={{ base: '0px',md:'0px', lg: "10px" }}
            px={{ base: '0px',md:'0px', lg: "15px" }} 
            pl={{ base: '0px',md:'0px', lg: "100px" }}
            pr={{ base: '0px',md:'0px', lg: "100px" }}
            textAlign="left" w={{ base: "100%", lg: "100%" }}
        >
            <Box
                flexDirection={{ base: 'column', md: 'row' }}>
                <Box mt={[0,0, 20]}
                >
                     <Box bgColor="red" w="100%"
                     h="5px"
                ></Box>
                
                    <chakra.form
                        method="POST"
                        shadow="base"
                        rounded={[null, "md"]}
                        overflow={{ sm: "hidden" }}
                        h={{base:"auto",md:"auto",lg:"50vh"}}
                        onSubmit={formik.handleSubmit}
                    >
                        <Center> <chakra.h1
                            fontSize={{ base: "2xl", md: "3xl" }}
                            color="black"
                            fontWeight="bold"
                            pt={10}
                        >
                            Subscribe To Our Newsletter
                        </chakra.h1></Center>
                      
                        <Center>
                        <chakra.h1
                            fontSize={{ base: "md", md: "md" }}
                            color="black"
                            p={10}
                            pt={5}
                        >
                            Signup to receive email updates on our lastest stories, products, announcements, special promotion and more
                        </chakra.h1>
                        </Center>
                       


                        <Stack
                            px={4}
                            py={5}
                            p={[null, 6]}
                            bg={useColorModeValue("white", "gray.700")}
                            spacing={6}
                        >
                            <Box d="flex" flexDirection={{ base: 'column', lg: 'row' }}>
                            <FormControl pr={5}>
                                    <FormLabel
                                        
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue("gray.700", "gray.50")}
                                    >
                                        First Name
                                        </FormLabel>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        onChange={formik.handleChange}
                                        value={formik.values.firstName}
                                        placeholder="John"
                                        id="firstName"
                                        mt={1}
                                        focusBorderColor="brand.400"
                                        shadow="sm"
                                        size="sm"
                                        w="full"
                                        rounded="md"
                                    />
                                </FormControl>
                                    <Spacer/>
                                <FormControl pr={5}>
                                    <FormLabel
                                       
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue("gray.700", "gray.50")}
                                    >
                                       Last Name
                                    </FormLabel>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        placeholder="Doe"
                                        onChange={formik.handleChange}
                                        value={formik.values.lastName}
                                        id="lastName"
                                        mt={1}
                                        focusBorderColor="brand.400"
                                        shadow="sm"
                                        size="sm"
                                        w="full"
                                        rounded="md"
                                    />
                                </FormControl>
                                <Spacer/>
                                <FormControl pr={5}>
                                    <FormLabel
                                        
                                        fontSize="sm"
                                        fontWeight="md"
                                        color={useColorModeValue("gray.700", "gray.50")}
                                    >
                                       Email Address
                                         </FormLabel>
                                    <Input
                                        type="text"
                                        name="email"
                                        id="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        placeholder="john@doe.com"
                                        mt={1}
                                        focusBorderColor="brand.400"
                                        shadow="sm"
                                        size="sm"
                                        w="full"
                                        rounded="md"
                                    />
                                </FormControl>
                                <Spacer/>
                                <Center
                                   
                                    px={{ base: 4, sm: 6 }}
                                    py={3}
                                    pt={7}
                                    textAlign="right"
                                    alignItems="center"
                                   
                                >
                                    <Button type="submit" borderRadius={30} colorScheme="red" variant="solid">
                                        SUBSCRIBE
                                    </Button>
                                </Center>
                            </Box>
                        </Stack>
                    </chakra.form>
                    <Box bgColor="red"  w="100%"
                     h="5px"
                ></Box>
                </Box>
            </Box>
        </Box>
    )
}

export default FormSubscribe;