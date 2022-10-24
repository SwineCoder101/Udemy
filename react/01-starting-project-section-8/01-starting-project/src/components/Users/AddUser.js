import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import { useState } from "react";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);

  const addUserHandler = (event) => {
    event.preventDefault();
    console.log("first");
    if (username.trim().length === 0 || age < 1) {
      return;
    }
    console.log(`${username} ------ ${age}`);
    props.onChangeUserList(username, age);
    setUsername("");
    setAge(0);
  };

  const onChangeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const onChangeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={onChangeUsernameHandler}
          value={username}
        />
        <label htmlFor="age">Age(Years)</label>
        <input
          id="age"
          type="number"
          onChange={onChangeAgeHandler}
          value={age}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
