import React from 'react'
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    makeStyles,
    Typography
} from '@material-ui/core';
import { textShortener } from "../utils/tools";


const Product = (props) => {

    const useStyles = makeStyles(theme => ({
        root: {
            maxWidth: 345,
            margin: "20px auto"
        },
        media: {
            height: 350,
            width: 350,
            "& > img": {
                height: "100%",
                width: "100%",
                objectFit: "contain"
            }
        },
    }));

    const classes = useStyles();

    const { title, price, description, category, image } = props;

    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>
                    <div className={classes.media}>
                        <img src={image} alt={title} />
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {textShortener(title, 10)}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {textShortener(description, 130)}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions style={{ justifyContent: "space-around" }}>
                    <Button size="small" color="primary">
                        Detail
                    </Button>
                    <Button size="small" color="primary">
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>
        </>
    );
}

export default Product;