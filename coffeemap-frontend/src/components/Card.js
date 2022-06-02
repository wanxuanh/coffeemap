import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const CardReview = (props) => {
    console.log("test")
    const {review} = props

    return (
   <div style={{float: 'left' }}>
        <Card sx={{ display: "inline-block", mx: '2px', marginRight: '4px', backgroundColor: "#6F4E37" }}>
        <CardContent>
        <h1><b>Cafe Name: {review.cafes.cafename}</b></h1>
        <h1>Comments: {review.comments}</h1>
        {/* <h1>withPowerPlug: {review.withPowerPlug}</h1> */}
        <h1>Must try food: {review.USP}</h1>
        <h1>Drink Name: {review.drinkName}</h1>
        <h1>Price: ${review.drinkPrice}</h1>
        <h1>Coffee Origin: {review.originBlend}</h1>
        <h1>Coffee Texture: {review.coffeeTexture}</h1>
        <h1>Coffee Body: {review.coffeeBody}</h1>
        <h1>Coffee Aftertaste: {review.coffeeAftertaste}</h1>
        <h1>Coffee Origin: {review.originBlend}</h1>
        <h2 style={{backgroundColor: "white"}}>Commented by: {review.users.name}</h2>
        <h1>{review.datetime}</h1>
        </CardContent>
        {/* <CardActions>
        <Button size="small">Learn More</Button>
        </CardActions> */}
        </Card>
        </div>
       
        
    );
};

export default CardReview;