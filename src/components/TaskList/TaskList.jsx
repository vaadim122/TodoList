import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { List } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Task from "../Task/Task";
import { getTasks } from "../../redux/actions/tasks.actions";

const styles = {
  section_list: {
    border: "1px solid grey",
    padding: 15,
    width: "700px",
    background: "#eeeded",
    borderRadius: "5px",
    marginTop: "50px",
  },
};

const TaskList = ({ classes: { section_list } }) => {
  const tasks = useSelector(({ taskReducer }) => taskReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
  }, []);
  return (
    <List className={section_list}>
      {tasks.map((el) => (
        <Task key={el.id} {...el} />
      ))}
    </List>
  );
};

export default withStyles(styles)(TaskList);
