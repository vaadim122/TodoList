import axios from "axios";

export const GET_TASKS = "TASKS/GET_TASKS";
export const ADD_TASKS = "TASKS/ADD_TASKS";
export const DELETE_TASKS = "TASKS/DELETE_TASKS";

export const getTasks = () => (dispatch) =>
  axios
    .get("https://60531f7945e4b30017290de9.mockapi.io/material")
    .then(({ data }) => {
      dispatch({
        type: GET_TASKS,
        payload: data,
      });
    });

const addTaskHelper = (text) => ({
  type: ADD_TASKS,
  payload: text,
});

export const addTask = (task) => (dispatch) =>
  axios
    .post("https://60531f7945e4b30017290de9.mockapi.io/material", task)
    .then(({ data }) => dispatch(addTaskHelper(data)));

const deleteTaskHelper = (task) => {
  return {
    type: DELETE_TASKS,
    payload: task,
  };
};

export const deleteTask = (id) => (dispatch) =>
  axios
    .delete(`https://60531f7945e4b30017290de9.mockapi.io/material/${id}`)
    .then(({ data }) => dispatch(deleteTaskHelper(data)));
