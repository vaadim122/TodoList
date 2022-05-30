import React from "react";
import { useTranslation } from "react-i18next";
import { List, Typography, ListItem, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Task from "../Task/Task";

const styles = {
  section_list: {
    border: "1px solid grey",
    padding: 15,
    width: "700px",
    background: "#fffef2",
    borderRadius: "5px",
  },
  task_length: {
    fontSize: 14,
    textAlign: "right",
    paddingTop: 15,
  },
};

const TaskList = ({ classes: { section_list, task_length }, tasks }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <List className={section_list}>
        {tasks.map((el) => (
          <Task key={el.id} {...el} />
        ))}
        <ListItem>
          <Grid container direction="row" alignItems="center">
            <Grid item xs={12}>
              <Typography
                className={task_length}
                color="textSecondary"
                component="p"
              >
                {t("task_lenght")} - {tasks.length}
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
      </List>
    </>
  );
};

export default withStyles(styles)(TaskList);
