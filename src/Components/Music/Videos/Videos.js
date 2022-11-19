import React from 'react'

import { Stack, Box } from '@mui/material';

import VideoCard from './VideoCard';
import ChanelCard from './ChanelCard';

const Videos = ({ videos }) => {

  console.log("videos")
  console.log(videos)

  return (
    <Stack direction='row' flexWrap="wrap" justifyContent="center" gap={2}>
      {videos.map((item, i) => (
              <Box key={i}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.chanelId && <ChanelCard chanelDetail={item} />}
              </Box>
      ))};
    </Stack>
  )

}

export default Videos;
