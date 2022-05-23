import style from './Community.module.scss';
import {ImageList,ImageListItem, Typography, Stack, Grid, Box} from '@mui/material'
import dummyData from "../../Dummy/DummyData";
import { styled } from '@mui/material/styles';

const Community = () => {


    return (
    <div className={style.community}>

        <Stack spacing={1}>
            <Grid container spacing={1}>



                <Grid item xs={12}>
                    <Box color="text.primary" bgcolor="white">
                        <ImageList sx={{width: 390}} cols={2} rowHeight={195}>
                            {dummyData.map((item)=>(
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
                    <Box color="text.secondary" bgcolor="white">

                    </Box>
                </Grid>
            </Grid>

        </Stack>



    </div>
  );
};

export default Community;
