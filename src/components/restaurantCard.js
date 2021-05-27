import React from "react";
import {
  makeStyles,
  Card,
  Button,
  Typography,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const RestaurantCard = ({ restaurant, add: address }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root} variant="elevation" elevation={4}>
      <CardContent>
        <Typography className={classes.title} variant="h4" >
          {restaurant.name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Cuisine: {restaurant.cuisine}
        </Typography>
        <Typography variant="h6">Address: {address}</Typography>
      </CardContent>
      <CardActions className={classes.buttonConainer}>
      <Link to={"/restaurants/"+restaurant._id} className="btn btn-primary col-lg-5 mx-1 mb-1">
                    View Reviews
                  </Link>
        

        <Button
          variant="contained"
          color="primary"
          href={`https://www.google.com/maps/place/${address}`}
          target="_blank"
        >
          View Maps
        </Button>
      </CardActions>
    </Card>
  );
};

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: "25%",
    margin: 4,
    background: "#3DDBC1"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    textAlign: "center",
  },
  pos: {
    marginTop:12,
    marginBottom: 12,
  },
  buttonConainer: {
    justifyContent: "center",
  },
});

export default RestaurantCard;
