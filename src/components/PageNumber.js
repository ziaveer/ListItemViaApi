import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
const PageNumber = (props) =>{
    const classes = useStyles();
    const handleChange =(event,value) =>{
        props.onPageChange(value);

    }


    return <div className={classes.root}>
    
    <Pagination count={props.count} onChange={handleChange} color="primary" size='large' />
    
  </div>
}
 export default PageNumber;