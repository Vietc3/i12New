import React, { useState, useEffect,useRef } from "react";
import { Box, Center, Button } from '@chakra-ui/react';
import PostLastestCard from '../../cards/PostLastestCard';
import { useGetArticles } from '../../../helpers/articles'
type Props = {
    margin?: number;
    containerHeight?: number;
    articles: any;
}

const VideoCard = ({
    articles,
}: Props) => {

    const [isFetching, setIsFetching] = useState(false);
    const [items, setItems] = useState<Array<any>>([]);
    const page = useRef(0);
    const limit = 3;
    const total = articles.length;

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight)
            return;
        else {
            page.current++;
            setIsFetching(true);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        if (total <= items.length) { setIsFetching(false) 
            return; };
        useGetArticles(`youtube_url_ne=&_start=${limit *page.current}&_limit=${limit}`).then(
            (result) => {
                const newItem = [...items, ...result]
                setItems(newItem);
                setIsFetching(false);
            }
        )
    }, [isFetching]);

    useEffect(() => {
        useGetArticles(`youtube_url_ne=&_start=0&_limit=${limit}`).then(
            (result) => {
                setItems(result);
            }
        )
    }, [])

    return (
        <>
            <Box d="flex" flexDirection={{ base: 'column', lg: 'row' }}>
                <Box pl={{ base: '0px', lg: "70px" }}
                    pr={{ base: '0px', lg: "70px" }} d="flex" flexDirection="column" flex="4" as="section" marginY={'.7em'}>
                    {items.map((post: any) => (
                        <Box key={post.title + 'videos' + post.id}>
                            <PostLastestCard post={post} />
                        </Box>
                    ))}
                </Box>
            </Box>
            {isFetching && <Center h="100px" color="black">
                <Button colorScheme="black" variant="outline">
                    Loading More
                </Button>
            </Center>}
        </>
    );
};

export default VideoCard;