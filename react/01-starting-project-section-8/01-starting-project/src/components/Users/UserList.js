import classes from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  const users = props.users;
  console.log(users);
  return (
    <Card className={classes.users}>
      <ul>
        {users.map((user) => (
          <li>
            {user.name} is ({user.age}) years old
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
