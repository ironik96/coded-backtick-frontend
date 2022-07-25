import io from "socket.io-client";
import { handleNotificationSocket } from "./notification";
import { handleAddMember } from "./boardMembers";
import { handleBoardAddMember, handleBoardTask } from "./board";

const socket = io("http://localhost:8000");

export const connectAppSocket = () => {
  socket.on("connection", () => {
    console.log("connected");
  });
  socket.on("notification", handleNotificationSocket);
  socket.on("add-member", handleAddMember);

  socket.on("disconnect", () => {
    console.log("disconnected");
  });

  return () => {
    socket.off("connect");
    socket.off("notification");
    socket.off("add-member");
    socket.off("disconnect");
  };
};

export const connectBoardSocket = () => {
  socket.on("board-add-member", handleBoardAddMember);
  socket.on("board-task", handleBoardTask);

  return () => {
    socket.off("board-add-member");
    socket.off("board-task");
  };
};
