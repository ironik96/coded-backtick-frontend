import io from "socket.io-client";
import { handleNotificationSocket } from "./notification";
import { handleAddMember } from "./boardMembers";

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
