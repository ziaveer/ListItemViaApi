import React from "react";
import classes from './ListItem.module.css';
const ListItem = (props) => {
  return (
    <li className ={classes.item}>
    <div>
      <img src={props.src} alt="img" />
      <h2>
        Name:- {props.firstName}
        {props.lastName}
      </h2>
      </div>
      <h3> {props.id}</h3>
      <h2>Email:-{props.email}</h2>
      
    </li>
  );
};
export default ListItem;
