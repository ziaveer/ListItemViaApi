import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

// import classes from './ListItem.module.css';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));
const ListItem = (props) => {
  const classes = useStyles();
  const fullName= `${props.firstName} ${props.lastName}`

  return (
    <Grid item sm={6} xs={12}>
      <Paper square  variant="elevation" className={classes.root}>
        <img src={props.src} alt="img" />
        <Grid item sm={6} xs={12}>
          <Typography variant="h5" color="textPrimary" >
          {fullName}
            
          </Typography>
          <Grid item>
            <Typography color="secondary" >{props.email}</Typography>
            
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
export default ListItem;
