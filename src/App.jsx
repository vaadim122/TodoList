import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Grid } from "@material-ui/core";
import AddForm from "./components/AddForm/AddForm";
import TaskList from "./components/TaskList/TaskList";

const App = () => {
  return (
    <div>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <AddForm />
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <TaskList />
      </Grid>
    </div>
  );
};

export default App;
