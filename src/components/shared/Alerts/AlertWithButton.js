import boardMembersStore from "../../../stores/boardMembersStore";

import Alert from "../Alerts/Alert";
const Swal = require("sweetalert2");
export default function AlertWithButton(
  message,
  icon,
  board,
  member,
  onConfirm
) {
  return Swal.fire({
    position: "center",
    icon: icon,
    title: message,
    showCancelButton: true,
    confirmButtonText: "Yes",
    confirmButtonColor: "#1DAD91",
  }).then((result) => {
    if (result.isConfirmed) {
      if (onConfirm) {
        onConfirm();
      } else {
        boardMembersStore.deleteMember(board, member._id, member.userId._id);
        console.log(board, member);
        Alert("Deleted ", "success");
      }
    } else if (result.isDenied) {
      return "cancel";
    }
  });
}
