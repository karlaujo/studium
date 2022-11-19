import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
// import { CheckCircle } from '@mui/icons-material'
import { demoThumbnailUrl, demoVideoUrl, demoChannelUrl, demoChannelTitle, demoVideoTitle } from '../../../Utils/Constants'
import { Stack, Box } from '@mui/material';

const VideoCard = ({ video: { id: { videoId }, snippet } }) => {

  return (
    <Card sx={{ width: { md: '270px', xs: '100%' }, borderRadius: '5px'}}>
        <div>
        <a rel="norefferrer" style={{textDecoration: 'inherit', color: 'inherit'}} target="_blank" href={{videoId} ? `https://www.youtube.com/watch?v=${videoId}` : `https://www.youtube.com/watch?v=Vg1mpD1BICI${demoVideoUrl}`}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url}
                alt={snippet?.title}
                sx={{ width: 270, height: 150 }} />
        </a>
        </div>
        <CardContent sx={{ backgroundColor: 'rgba(0,0,0,0.9)',
                            height: '96px'}}>
            <a style={{textAlign: 'left', textDecoration: 'none', color: 'white'}} target="_blank" href={videoId ? `https://www.youtube.com/watch?v=${videoId}` : `https://www.youtube.com/watch?v=Vg1mpD1BICI${demoVideoUrl}`}>
                <Typography>

                {snippet?.title.slice(0, 80) || demoVideoTitle}

                </Typography>
            </a>
            <a style={{textDecoration: 'none', textAlign: 'left',}} target="_blank" href={snippet?.channelId ? `https://www.youtube.com/channel/${snippet?.channelId}` : `https://www.youtube.com/c/${demoChannelTitle}`}>
                <Typography variant="subtitle2" fontWeight="bold" color="gray">
                    {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
                </Typography>
            </a>
        </CardContent>
    </Card>
  )

}

export default VideoCard;
