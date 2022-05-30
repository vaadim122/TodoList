import React from "react";
import { useDispatch } from "react-redux";
import {
  Grid,
  ListItem,
  IconButton,
  Divider,
  Typography,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";

import { deleteTask } from "../../redux/actions/tasks.actions";

const styles = {
  line: {
    position: "relative",
    top: "8px",
  },
  span: {
    fontSize: 11,
  },
  task: {
    padding: "0 15px 0 25px",
  },
};

const Task = ({ classes: { line, span, task }, date, text, id }) => {
  const dispatch = useDispatch();
  return (
    <ListItem>
      <Grid container direction="row" alignItems="center">
        <Grid item xs={2}>
          <Typography className={span} color="textSecondary" component="span">
            {moment(date * 1000).format("LLLL")}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={task} color="textPrimary" component="p">
            {text}
          </Typography>
        </Grid>
        <Grid item xs={1}>
          <IconButton
            aria-label="delete"
            color="secondary"
            onClick={() => dispatch(deleteTask(id))}
          >
            <DeleteIcon />
          </IconButton>
        </Grid>
        <Grid item xs={12}>
          <Divider className={line} />
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default withStyles(styles)(Task);
