import React, { useEffect, useState } from "react";
import boardMembersStore from "../../../stores/boardMembersStore";
import plusIcon from "../../../images/plus.png";
import "../../../styles/searchBar.css";
import boardStore from "../../../stores/boardStore";
import { observer } from "mobx-react";
import Alert from "../../../components/shared/Alert";

function SearchBar() {
  const [users, setUsers] = useState([]);
  let [addUser, setaddUser] = useState({});
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    (async () => {
      await boardMembersStore.getUsers();
      setUsers(boardMembersStore.users);
    })();

    return () => {
      boardMembersStore.users = null;
    };
  }, []);

  const handleChange = (event) => {
    const searchMember = event.target.value;
    const filteredMembers = users.filter((user) => {
      return user.fname.toLowerCase().includes(searchMember.toLowerCase());
    });
    if (searchMember === "") {
      setFilteredData([]);
    } else {
      setFilteredData(filteredMembers);
    }
  };

  const handleClick = (e) => {
    addUser = {
      userId: e._id,
      boardId: boardStore.board._id,
  
    };
    boardMembersStore.addMember(addUser.boardId, addUser);
    setFilteredData([]);
    Alert("Member added succefully ", "success");
  };

  const userList = filteredData.map((user, id) => (
    <div
      key={id}
      className="flex bg= bg-white rounded-lg justify-between resultrow"
    >
      <div className="flex items-center space-x-2 p-2">
        <img
          className="rounded-[100%] w-[40px] h-[40px]   object-cover relative  
        "
          src={user.image}
        />
        <h1>{user.fname}</h1>
      </div>
      <button className="p-5" onClick={() => handleClick(user)}>
        <img src={plusIcon} className="w-[12px]" />
      </button>
    </div>
  ));

  return (
    <>
      <div className="w-[300px] place-content-center">
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            onChange={handleChange}
            type="text"
            id="simple-search"
            className=" border bg-white border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5 outline-none"
            placeholder="Add Member"
            required=""
          />
        </div>

        <div className=" flex justify-center ">
          {filteredData.length !== 0 && (
            <div className="dataResult">{userList}</div>
          )}
        </div>
      </div>
    </>
  );
}
export default observer(SearchBar);
