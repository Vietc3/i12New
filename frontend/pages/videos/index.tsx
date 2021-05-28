import React from 'react';

import { GetStaticProps } from 'next';
import {useGetArticles} from '../../helpers/articles';
import VideoCard from '../../components/views/video/video';


type Props = {
    articles?: any;
    errors?: string;
};

const VideosPage = ({ articles }: Props) => {
    
    return (<>
            <VideoCard articles={articles}/>
            </>
    );
};

export const getStaticProps: GetStaticProps =  async (context:any)=> {
    try {
     
        let data  = await useGetArticles(`youtube_url_ne=`);

        return { props: { articles: data },  revalidate: 10 };
    } catch (err) {
        return { props: { errors: err.message } };
    }
};

export default VideosPage;