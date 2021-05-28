import React, { useState } from 'react';
import { chakra, HStack, Box, Flex, useColorModeValue, FlexProps, Icon, Center, Spacer } from "@chakra-ui/react";
import Image from '../Image';
import { useRouter } from 'next/router';
import { BsCalendar, BsPencil } from "react-icons/bs";
import { AiFillPlayCircle } from "react-icons/ai";
import {getUrlImage,formatDatePublic} from '../../helpers/commonFuction';
import { colors } from '../../styles/theme';


interface Props extends FlexProps {
  alt: string;
  idArticle: string;
  article: any
}

const PostCard = ({ idArticle, article }: Props) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();
  const onClick = () => {
    router.push(`/articles/${idArticle}`);
  };



  return (
    <Flex
      bg={useColorModeValue("white", "gray.800")}
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center"
      onClick={()=>onClick()}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Box
        bg={useColorModeValue("white", "gray.800")}
        mx='0'
        display={{ lg: "flex" }}
        // shadow={{ lg: "lg" }}
        rounded={{ lg: "lg" }}
        w="full"

      >
        <Box w={{ lg: "100%" }} display={{base:'none',lg:'flex'}}  style={{
                    backgroundImage: hover ? `url("${getUrlImage(article.hero_desktop.url)}`:`linear-gradient(rgba(245, 246, 252, 0.52), rgb(39 40 53 / 68%)),url("${getUrlImage(article.hero_desktop.url)}")`,
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    backgroundSize: "cover"
                }}
              
                justifyContent="flex-end"
                flexDirection="column"
                h={{ base: '350px', lg: "660px" }}
                pl={{ base: '0px', lg: "80px" }}
                pr={{ base: '0px', lg: "80px" }}>
      
        </Box>




        <Box w={{ lg: "100%" }} display={{base:'flex',lg:'none'}}>
          <Image
            objectFit="cover"
            src={getUrlImage(article.hero_mobile.url)}
            maxHeight={'640px'}
            h={'400px'}
            w="100%"
          />
        </Box>



        <HStack color={colors.primary} pl="10px" justify="center" pl={{base:"0px",lg:"65%"}} pos="absolute" top={{base:"8px",lg:"30"}} w="full">
          <Box py={20} px={6} maxW={{ base: "xl", lg: "5xl" }} textAlign={{base:"center",lg:"left"}} w={{ lg: "80%" }}>
            <chakra.h1
            fontFamily="Playfair"
              data-aos="fade-left"
              fontSize={{ base: "2xl", md: "3xl" }}
              
              fontWeight="bold"
            >
              {article.title}
            </chakra.h1>
            <Box textAlign="left" alignItems="center" py={3}  data-aos="fade-left">
              
             
                  <chakra.h2 mx={3} fontWeight="bold" fontSize="lg">
                    {article.summary}
                  </chakra.h2>
              
            </Box>
          </Box>
        </HStack>
      </Box>
    </Flex>
  );
};

export default PostCard;