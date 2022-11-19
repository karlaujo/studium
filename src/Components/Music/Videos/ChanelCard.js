import React from 'react'
import { Box, CardContent, CardMedia, Typography, Stack } from '@mui/material';
import { demoProfilePicture } from '../../../Utils/Constants';
import { Link } from 'react-router-dom';

const ChanelCard = (({ channelDetail }) => {


  return (

    <Box
        sx={{
            boxShadow: 'none',
            borderRadius: '20px'
        }}
    >
        <Link to={`/channel/${channelDetail?.id?.channelId}`} style={{textDecoration: 'none'}}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
                <CardMedia
                image={channelDetail?.snippet?.title}
                sx={{ borderRadius: '50%', height: '180px', width: '180px', mb: 2, border: '1px solid #e3e3e3'}}/>
            </CardContent>
            <Typography variant="h6">
                {channelDetail?.snippet?.title}
            </Typography>
        </Link>
    </Box>

  )

})

export default ChanelCard;
