import React from 'react'
import { useState, useEffect } from "react";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Paper } from '@material-ui/core';
import { Typography, Card } from '@mui/material';
import Box from '@mui/material/Box';
import Videos from './Videos/Videos.js'
import { fetchFromAPI } from '../../Utils/fetchFromAPI.js';
import Pagination from './Pagination/Pagination';

import useStyles from './styles';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
}

const Music = () => {

    const query = useQuery();
    const page = query.get('page') || 1;

    const music = ["Trip%20Hop",
                    "Study%20Instrumental",
                    "Best%20Of%20Vanilla%20Cure%20Music",
                    "Lofi",
                    "Ambience",
                    "Classical%20Study%20Music",
                    "Frequencies%20Study%20Focus",
                    "Brown%20Noise",
                    "White%20Noise",
                    "Coffee%20Shop%20Ambience",
                    "City%20Ambience",
                    "Vaporwave"]

    const [value, setValue] = useState(0);

    const [videos, setVideos] = useState([]);

    const [category, setCategory] = useState('Trip Hop');

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${category}`, page)
        .then((data) => setVideos(data))
    }, [category, page])

    const handleChange = (event, newValue) => {
        setValue(newValue);
        setCategory(music[newValue]);
    };

    const classes = useStyles();

    return (
        <div style={{display: 'inline-block', height: 'auto', width: "100%",
                     alignContent: 'center', backgroundColor: 'rgba(255, 255, 255, 0.7)',
        boxShadow: '0 10px 60px -10px rgba(13, 28, 39, .5)',
        backdropFilter: 'blur(10spx)', borderRadius: '10px'}}>
            <div style={{ padding: '10px', textAlign: 'left'}}>
                <Card style={{maxWidth: '100px', textAlign: 'center',
                              borderRadius: '20px', margin: '0px', backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
                    <h3 style={{margin: '5px', padding: '5px', color: 'black'}}>MUSIC</h3>
                </Card>
            </div>

            <div className={classes.topDiv}>
                <Tabs className={classes.tabs} variant="scrollable" value={value} onChange={handleChange} aria-label="basic tabs example">
                    {/* 12 tabs  */}
                    <Tab label="Trip Hop" />
                    <Tab label="Instrumental" />
                    <Tab label="Best Of" />
                    <Tab label="Lofi" />
                    <Tab label="Ambience" />
                    <Tab label="Classical" />
                    <Tab label="Frequencies" />
                    <Tab label="Brown Noise" />
                    <Tab label="White Noise" />
                    <Tab label="Coffee Shop Ambience" />
                    <Tab label="City Ambience" />
                    <Tab label="Vaporwave" />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                {category.replaceAll("%20", " ")} Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                {category.replaceAll("%20", " ")} Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                Best of Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                {category.replaceAll("%20", " ")} Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={4}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                {category.replaceAll("%20", " ")} Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={5}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                Classical Music
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={6}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                Frequencies
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={7}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                {category.replaceAll("%20", " ")} Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={8}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                {category.replaceAll("%20", " ")} Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={9}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                {category.replaceAll("%20", " ")} Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={10}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                {category.replaceAll("%20", " ")} Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
                <TabPanel value={value} index={11}>
                    <Box p={2} sx={{ overrflowY: 'auto', height: 'auto', flex: 2}}>
                        <Typography variant="h4" fontWeight="bold" mb={2} mt={-3} sx={{margin: 'none',color: 'white '}}>
                            <span style={{ color: 'black'}} className={classes.span}>
                                {category.replaceAll("%20", " ")} Playlists
                            </span>
                        </Typography>
                        <Paper elevation={6} className={classes.pagination}>
                            <Pagination page={page} />
                        </Paper>
                        <Videos videos={videos}/>
                    </Box>
                </TabPanel>
            </div>
        </div>
    )
}

export default Music;
