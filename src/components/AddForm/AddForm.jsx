import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { withStyles } from "@material-ui/core/styles";
import moment from "moment";
import {
  Input,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@material-ui/core";

import { addTask } from "../../redux/actions/tasks.actions";

const styles = {
  section_form: {
    border: "1px solid #9b9b9b",
    padding: 15,
    width: "700px",
    background: "#fffddc",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "space-between",
  },
};

const AddForm = ({ classes: { section_form } }) => {
  const { t, i18n } = useTranslation("common");
  const [language, setLanguage] = useState("en");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleLangChange = (evt) => {
    const lang = evt.target.value;
    console.log(lang);
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  const handeBtn = (e) => {
    e.preventDefault();
    const task = {
      date: moment(Date()).unix(),
      text: text,
    };
    dispatch(addTask(task));
    setText("");
  };

  return (
    <form className={section_form}>
      <FormControl style={{ width: "75%" }}>
        <InputLabel htmlFor="add-task">{t("form.label")}</InputLabel>
        <Input
          id="add-task"
          onChange={({ target: { value } }) => setText(value)}
          value={text}
        />
      </FormControl>
      <Button
        type="submit"
        variant="contained"
        color="secondary"
        onClick={handeBtn}
      >
        {t("form.btn")}
      </Button>
      <Select
        labelId="label"
        id="select"
        onChange={handleLangChange}
        value={language}
      >
        <MenuItem value="en">En</MenuItem>
        <MenuItem value="fr">Fr</MenuItem>
      </Select>
    </form>
  );
};

export default withStyles(styles)(AddForm);
