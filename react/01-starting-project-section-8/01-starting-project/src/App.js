import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  let showList = false;

  const onChangeUserListHandler = (uName, uAge) => {
    setUserList((prevUserList) => [
      ...prevUserList,
      { name: uName, age: uAge },
    ]);
    showList = true;
  };

  return (
    <div>
      <AddUser onChangeUserList={onChangeUserListHandler} />
      {showList || <UserList users={userList} />}
    </div>
  );
}

export default App;
