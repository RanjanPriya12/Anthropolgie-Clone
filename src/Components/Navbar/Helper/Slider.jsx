import React from "react";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Typography from '@mui/material/Typography';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

const MyCollection = [
    {
        label1: "limited time",
        label2: "20% OFF ALL BEDDING, RUGS, CANDLES, DINING & MORE",
        label3: "shop the events",
        label4: "details"
    },
    {
        label1: "the 4th of July is almost here!",
        label2: "Order by 6/21, 1PM ET! ",
        label3: "start shopping"
    },
    {
        label1: "meet us by the water's edge",
        label2: "New & Now: The Getaway Shop",
        label3: "shop for destination near & for"
    },
];

const Slider = () => {
    const CollectionSize = MyCollection.length;
    const [index, setIndex] = React.useState(0);

    const goToNext = () => {
        setIndex((index) => index + 1);
    };

    const goToPrev = () => {
        setIndex((index) => index - 1);
    };

    return (
        <div className="slider">
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <Button size="small" onClick={goToPrev} disabled={index === 0}>
                            <KeyboardArrowLeftIcon style={{color:"white"}}/>
                        </Button>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography style={{display:"flex", gap:"40px"}}>
                            <i>{MyCollection[index].label1}</i>
                            <div>{MyCollection[index].label2}</div>
                            <div className="underline">{MyCollection[index].label3}</div>
                            <div className="underline">{MyCollection[index].label4}</div>
                        </Typography>
                    </Grid>
                    <Grid item xs={1}>
                        <Button  size="small" onClick={goToNext} disabled={index === CollectionSize - 1}>
                            <KeyboardArrowRightIcon style={{color:"white"}}/>
                        </Button>
                    </Grid>



                </Grid>
            </div>
        </div>
    );
};

export default Slider;
