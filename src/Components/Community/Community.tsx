import style from './Community.module.scss';
import {ImageList,ImageListItem, Typography, Grid, Box, Accordion, AccordionDetails, AccordionSummary} from '@mui/material'
import {getCommunityDummy} from "../../Dummy/DummyData";
import {BuildingPlacesType, ImageType} from '../../Interface/Interface';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AlarmIcon from '@mui/icons-material/NotificationsActive';
import InfoIcon from '@mui/icons-material/Info';
import PlaceIcon from '@mui/icons-material/Place';

const Community = () => {

    const dummyData = getCommunityDummy("img").data;
    const buildingData = getCommunityDummy("building").data;

    return (
    <div className={style.community}>
            <Grid container spacing={0.5}>
                <Grid item xs={12}>
                    <Box color="text.primary" bgcolor="white">
                        <ImageList sx={{width: 390}} cols={2} rowHeight={195}>
                            {dummyData.map((item:ImageType)=>(
                                <ImageListItem key={item.img}>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        loading="lazy"
                                        className={style.communityImg}/>
                                </ImageListItem>
                            ))}
                        </ImageList>
                        <Typography variant="h3" className={style.placeTitle}>
                            제1공학관
                        </Typography>

                        <Typography className={style.placeSubtitle}>
                            윗공대
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box bgcolor="white" sx={{py: 1}}>
                        <Grid container>
                            <Grid item>
                                <AlarmIcon/>
                            </Grid>
                            <Grid item>
                                <Typography>분실물</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box bgcolor="white" sx={{py: 1}}>
                        <Grid container>
                            <Grid item>
                                <InfoIcon/>
                            </Grid>
                            <Grid item>
                                <Typography>정보</Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid item xs={12}>
                    <Box bgcolor="white" sx={{py: 1}}>
                        <Grid container>
                            <Grid item>
                                <PlaceIcon/>
                            </Grid>
                            <Grid item>
                                <Typography>장소 안내</Typography>
                            </Grid>
                        </Grid>

                        {buildingData.map((item: BuildingPlacesType)=>(
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography>{item.floor}층</Typography>
                                </AccordionSummary>
                                <AccordionDetails>

                                    {item.places.map((place)=>(
                                        <Typography>
                                            {place.name}
                                        </Typography>
                                    ))}


                                </AccordionDetails>
                            </Accordion>
                        ))}
                        

                    </Box>
                </Grid>


            </Grid>



    </div>
  );
};

export default Community;
