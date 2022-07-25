import React, { useEffect , useState} from "react";
import boardMembersStore from "../../../stores/boardMembersStore";
import { observer } from "mobx-react";
import boardStore from "../../../stores/boardStore";
function Creatoritem() {
  const [currentCreator, setcurrentCreator] = useState(boardMembersStore.admin);
  useEffect(() => {
    (async () => {
      await boardMembersStore.getByUserId(boardStore.board.createdBy)
      setcurrentCreator(boardMembersStore.admin)
    })();

  }, []);

  return (
    <div className=" flex place-content-center ">
      <div className=" bg-white h-[70px] rounded-lg p-2 flex justify-between  w-[70%]">
        <div className="flex items-center  space-x-10 ">
          <img
            className="rounded-[100%] w-[60px] h-[60px] object-cover relative left-[20px]"
            src={ (currentCreator.image === null) ? "https://cdn-icons-png.flaticon.com/512/149/149071.png" : currentCreator.image} 
          />
          <div className="item-center ">
            <h1 className=""> {currentCreator.fname + " " + currentCreator.lname}</h1>
            <h5 className="text-[10px] text-left">Admin</h5> 
          </div>
        </div>
        <div className="flex items-center p-[10px] h-[100%] w-[80px] rounded-lg  place-content-center">
        <img className="w-[22px]" src="https://cdn-icons-png.flaticon.com/512/891/891024.png"/>
        </div>
      </div>
    </div>
  );
}
export default observer(Creatoritem);
