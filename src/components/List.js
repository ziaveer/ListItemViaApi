import ListItem from "./ListItem";
import classes from'./List.module.css';

const List = (props) => {
  // console.log(props.userLists);

  return (
    <ul className ={classes.list}>
      {props.userLists.map((data) => (
        <ListItem
          key={data.id}
          src={data.image}
          firstName={data.firstName}
          lastName={data.lastName}
          email={data.email}
        />
      ))}
    </ul>
  );
};
export default List;
