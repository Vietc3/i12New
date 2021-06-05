import { Box, Button, useDisclosure, CloseButton, HStack, Text, Icon, VStack, IconButton } from "@chakra-ui/react";
import { FaCarSide } from "react-icons/fa";
import { AiOutlineReload } from "react-icons/ai";
import { MdLocalParking } from "react-icons/md";
import React from 'react';
import useColorTheme from "../../../hooks/useColorTheme";


const ParkingCar = () => {
    const { isOpen, onToggle } = useDisclosure()
    const colors = useColorTheme()
    return (
        <>

            <Button leftIcon={<FaCarSide color="#f5e1a4" />}
                _hover={{ bg: colors.primary, color: 'white' }}
                borderRightRadius="30px" fontSize="15px" color="#f5e1a4"
                borderRadius="0px" top="80%" w="55px" bg="#4f2c1d" display={isOpen ? 'none' : 'flex'}
                zIndex="100"  position="fixed" onClick={onToggle}>P</Button>

            <Box display={isOpen ? 'flex' : 'none'} zIndex="100" borderRightRadius="50px" top="80%" w="200px" position="fixed" height="80px" bg="#4f2c1d" >
            <HStack spacing="5px">
                <VStack justifyContent="center" spacing="1px">
                    <HStack spacing="5px">
                        <Text
                            transition="ease-in 0.15s"
                            fontSize="xs"
                            fontWeight="bold"
                            textAlign="left"
                            color="#f5e1a4"
                        >
                            123
                        </Text>
                        <Text
                            transition="ease-in 0.15s"
                            fontSize="xs"
                            textAlign="center"
                            color="#f5e1a4"
                        >
                            available
                        </Text>
                        <CloseButton color="white" size="sm" onClick={onToggle} />
                    </HStack>
                    <HStack spacing="5px">
                        <Text
                            transition="ease-in 0.15s"
                            fontSize="xs"
                            textAlign="left"
                            color="#f5e1a4"
                        >
                            at
                        </Text>
                        <Text
                            transition="ease-in 0.15s"
                            fontSize="xs"
                            textAlign="center"
                            color="#f5e1a4"
                        >
                            4:10 pm
                        </Text>
                        <IconButton
                        ml="0px"
                            bg="#4f2c1d"
                            color="#f5e1a4"
                            _hover={{ bg: colors.primary, color: 'white' }}
                            fontSize="md"
                            aria-label="Search database"
                            icon={<AiOutlineReload />}
                        />
                    </HStack>
                </VStack>
                <Icon as={FaCarSide} boxSize={9} color="#f5e1a4" />
                <Icon as={MdLocalParking} boxSize={6} color="#f5e1a4" />

                </HStack>
            </Box>



        </>
    )
}

export default ParkingCar;