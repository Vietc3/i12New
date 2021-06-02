import React from "react";
import { Text, Box, SimpleGrid, Link, Icon, HStack } from "@chakra-ui/react";
import { URL_BASE } from '../../../constants';
import Markdown from "markdown-to-jsx";
import Image from '../../Image';
import useColorTheme from "../../../hooks/useColorTheme";
type Props = {
    wifi: string;
    nursing_room: string;
    charging_point: string;
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
const GettingHere = ({ wifi, nursing_room, charging_point }: Props) => {
    const urlImageMarkdown = (text: string) => {
        return text.split('/uploads/').join(`${URL_BASE}/uploads/`);
    }
    const colors = useColorTheme();
    return (
        <>
            <Box pl={{ base: '0px', lg: "60px" }} pr={{ base: '0px', lg: "60px" }}>
                <Text
                    transition="ease-in 0.15s"
                    fontSize="2xl"
                    fontWeight="bold"
                    bottom="30px"
                    textAlign="center"
                    color={colors.primary}
                    mt={{ base: "25px", lg: "50px" }}
                >
                    Amentities
                </Text>
                <SimpleGrid columns={[1, null, 3]} spacing="5px" >
                    <Box>
                        <HStack spacing="10px">
                            <Text
                                transition="ease-in 0.15s"
                                fontSize="1xl"
                                fontWeight="bold"
                                bottom="30px"
                                textAlign="center"
                                color={colors.primary}
                                mt={{ base: "25px", lg: "35px" }}
                                mb={{ base: "25px", lg: "35px" }}
                            >
                                Mall Wi-Fi
                            </Text>
                        </HStack>
                       
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
                            {urlImageMarkdown(wifi)}
                        </Markdown>
                       
                    </Box>
                  
                    <Box pl={{ base: '0px', lg: "60px" }} pr={{ base: '0px', lg: "60px" }}>
                    <HStack spacing="10px">
                            <Text
                                transition="ease-in 0.15s"
                                fontSize="1xl"
                                fontWeight="bold"
                                bottom="30px"
                                textAlign="center"
                                color={colors.primary}
                                mt={{ base: "25px", lg: "35px" }}
                                mb={{ base: "25px", lg: "35px" }}
                            >
                                Nursing Room
                            </Text>
                        </HStack>
                      
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
                            {urlImageMarkdown(nursing_room)}
                        </Markdown>
                      
                    </Box>
                    <Box pl={{ base: '0px', lg: "60px" }} pr={{ base: '0px', lg: "60px" }}>
                    <HStack spacing="10px" >
                            <Text
                                transition="ease-in 0.15s"
                                fontSize="1xl"
                                fontWeight="bold"
                                bottom="30px"
                                textAlign="center"
                                color={colors.primary}
                                mt={{ base: "25px", lg: "35px" }}
                                mb={{ base: "25px", lg: "35px" }}
                            >
                               Charging Point
                            </Text>
                        </HStack>
                        
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
                            {urlImageMarkdown(charging_point)}
                        </Markdown>
                  
                       
                    </Box>

                </SimpleGrid>
            </Box>
        </>
    )
}

export default GettingHere;