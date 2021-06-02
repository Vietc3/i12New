import {
  SimpleGrid,
  Text,
  Stack,
  StackDivider,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { getUrlImage } from '../../../helpers/commonFuction';
import useColorTheme from '../../../hooks/useColorTheme';
import moment from 'moment';
import Slider from "react-slick";
import Markdown from "markdown-to-jsx";
import { URL_BASE } from '../../../constants';
import Image from '../../Image';
import YoutubeEmbed from '../../youtube/youtube'
interface EventProps {
  event: any
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

const EventDetail = ({ event }: EventProps) => {
  const colors = useColorTheme();
  const vaildForm = moment(event.start_date).format("DD MMM YYYY");
  const validTo = moment(event.end_date).format("DD MMM YYYY");

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
          {event.photos.map((photo: any) => (
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
      
        <Stack spacing={4} pt="10%" >
          <Text fontSize={'4xl'} color={colors.primary} fontFamily="Playfair">{event.title}</Text>
          <Text
            textTransform={'uppercase'}
            color={colors.primary}
            fontSize={'md'}
            pb={5}
            fontWeight="bold"
            alignSelf={'flex-start'}
            rounded={'md'}>
            {vaildForm} - {validTo}
          </Text>

          <Stack
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
              {urlImageMarkdown(event.body)}
            </Markdown>
            {event.youtube_url && event.youtube_url !== "" ? <Box h={{ base: '380px', md: '500px', lg: '500px' }}>
                <YoutubeEmbed youtube_url={event.youtube_url} />
                </Box> : null}
          </Stack>
        </Stack>

      </SimpleGrid>
    </Box>
  );
}

export default EventDetail;