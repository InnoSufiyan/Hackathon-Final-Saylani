import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Box, ThemeProvider } from '@mui/system';




export default function Adcard({request, post, ourtext, ourtextHeadline}) {



    function viewHandler(adId) {
    }

    // console.log("props>>>", post?.image[0])
    return (
        <Box mr={3}>

            <Card sx={{ maxWidth: 300 }}>
                <CardActionArea >
                    <CardMedia
                        component="img"
                        height="140"
                        image={request}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        {post?.adTitle}
                        </Typography>
                        <Typography style={{height:"50px"}} variant="body2" color="text.secondary">
                            {ourtextHeadline}
                        </Typography>
                        <hr/>
                        <Typography variant='h6' color="text.secondary">
                            {ourtext}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={()=>{viewHandler(post?.id)}} size="small" color="primary">
                        View
                    </Button>
                </CardActions>
            </Card>
        </Box>
    );
}
