import React from "react";
import { Text, Box } from "@chakra-ui/react";
import SimpleMap from "../../googleMap/GoogleMap";
import useColorTheme from "../../../hooks/useColorTheme";
type Props = {
    google_api: any;
    lng: any;
    lat: any;
};

const OurLocation = ({ google_api, lat, lng }: Props) => {
    const colors= useColorTheme()
    return (
        <>
            <Box pl={{base:'0px',lg:"60px"}} pr={{base:'0px',lg:"60px"}}>
                <Text
                    transition="ease-in 0.15s"
                    fontSize="2xl"
                    fontWeight="bold"
                    bottom="30px"
                    textAlign="center"
                    color={colors.primary}
                    mt={{ base: "25px", lg: "50px" }}
                    mb={{ base: "25px", lg: "50px" }}
                   >
                    Our Location
                </Text>
                <SimpleMap google_api={google_api} lat={lat} lng={lng} />
            </Box>
        </>
    )
}

export default OurLocation;