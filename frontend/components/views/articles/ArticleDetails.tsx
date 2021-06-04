import {
  SimpleGrid,
  Text,
  Stack,
  HStack,
  StackDivider,
  Divider,
  Link,
  Box,
  useColorModeValue,
  Icon
} from '@chakra-ui/react';
import { getUrlImage } from '../../../helpers/commonFuction';
import useColorTheme from '../../../hooks/useColorTheme';
import Slider from "react-slick";
import Markdown from "markdown-to-jsx";
import { URL_BASE } from '../../../constants';
import { FaWhatsapp } from "react-icons/fa";
import { BsEnvelopeFill } from "react-icons/bs";
import Image from '../../Image';

interface ArticleProps {
  article: any
}


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

const ArticleDetails = ({ article }: ArticleProps) => {
  const colors = useColorTheme();
  const urlImageMarkdown = (text: string) => {
    return text.split('/uploads/').join(`${URL_BASE}/uploads/`);
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    cssEase: "linear"
  }

  return (
    <Box pl={{ base: '0px', lg: "60px" }} pr={{ base: '0px', lg: "60px" }}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Slider {...settings}>
            {article.photos.map((photo: any) => (
              <Box pt="10%" key={'photo' + photo._id} >
                <Image
                  rounded={'md'}
                  alt={'feature image'}
                  src={
                    getUrlImage(photo.url)
                  }
                />
              </Box>))}
          </Slider>
        </Box>

        <Stack spacing={2} pt="7%" >
          <Box>
            <Text fontSize={'5xl'} pb="0px" color={colors.primary} fontFamily="Playfair">{article.artist_name}</Text>
            <Text
              textTransform={'uppercase'}
              color={colors.primary}
              fontSize={'md'}
              fontWeight="bold"
              alignSelf={'flex-start'}
              rounded={'md'}>
              {article.article_name}
            </Text>
          </Box>
          <Box mt="25px !important">
            <Divider borderColor="gray.300" />
          </Box>

          <Box>
            <Text
              color={colors.primary}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {article.material}
            </Text>
            <Text
              color={colors.primary}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {`Level ${article.level}`}
            </Text>
            <Text
              color={colors.primary}
              alignSelf={'flex-start'}
              rounded={'md'}>
              {`USD ${article.price}`}
            </Text>
          </Box>

          <Stack
            pt="25px"
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
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
              {urlImageMarkdown(article.body)}
            </Markdown>

          </Stack>
          <Stack spacing={2} pt="10%" >
            <Text fontSize={'xl'} fontWeight="bold" color={colors.primary} >Enquiry</Text>
            <Divider borderColor="gray.300" />       
              <HStack pt={5} spacing="10px">
                <Icon color="#004c45" as={FaWhatsapp} h="35px" w="35px" />
                <Text
                  transition="ease-in 0.15s"
                  fontSize="md"
                  bottom="30px"
                  textAlign="center"
                  color="#004c45"
                  mt={{ base: "25px", lg: "50px" }}
                  mb={{ base: "25px", lg: "50px" }}
                >
                  {`WhatsApp at ${article.contact_number}`}
                </Text>
              </HStack>

              <HStack pt={5} spacing="10px">
                <Icon color="#004c45" as={BsEnvelopeFill} h="35px" w="35px" />
                <Text
                  transition="ease-in 0.15s"
                  fontSize="md"
                  bottom="30px"
                  textAlign="center"
                  color="#004c45"
                  mt={{ base: "25px", lg: "50px" }}
                  mb={{ base: "25px", lg: "50px" }}
                >
                 {`Email at ${article.email}`}
                </Text>
              </HStack>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Box>
  );
}

export default ArticleDetails;