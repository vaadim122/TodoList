import React from "react";
import { useDispatch } from "react-redux";
import { Grid, ListItem, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { deleteTask } from "../../redux/actions/tasks.actions";

const Task = ({ date, text, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Grid container spacing={5}>
        <Grid item xs={2}>
          {date}
        </Grid>
        <Grid item xs={8}>
          {text}
        </Grid>
        <Grid item xs={2}>
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={() => dispatch(deleteTask(id))}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default Task;
