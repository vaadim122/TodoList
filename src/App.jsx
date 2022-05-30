import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import AddForm from "./components/AddForm/AddForm";
import TaskList from "./components/TaskList/TaskList";
import Loader from "./components/Loader/Loader";

import { getTasks } from "./redux/actions/tasks.actions";

const useStyles = makeStyles({
  title: {
    fontSize: 18,
    display: "block",
    width: "730px",
    padding: 15,
    fontWeight: "500",
    marginTop: "50px",
  },
});

const App = () => {
  const tasks = useSelector(({ taskReducer }) => taskReducer);
  const dispatch = useDispatch();
  const classes = useStyles();
  const { t } = useTranslation("common");
  useEffect(() => {
    dispatch(getTasks());
  }, []);

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <Typography className={classes.title} color="textPrimary" variant="h1">
          {t("title_form")}
        </Typography>
        <AddForm />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        {tasks.length ? (
          <>
            <Typography
              className={classes.title}
              color="textPrimary"
              variant="h1"
            >
              {t("title_list")}
            </Typography>
            <TaskList tasks={tasks} />
          </>
        ) : (
          <Loader />
        )}
      </Grid>
    </div>
  );
};

export default App;
