import ListItem from "./ListItem";

import { Grid } from "@material-ui/core";

const List = (props) => {
  // console.log(props.userLists);

  return (
      
    <Grid container spacing={4} direction='column' alignItems='center' >
      {props.userLists.map((data) => (
        <ListItem
        
          key={data.id}
          src={data.image}
          firstName={data.firstName}
          lastName={data.lastName}
          email={data.email}
        />
      ))}
    </Grid>
    
  );
};
export default List;
