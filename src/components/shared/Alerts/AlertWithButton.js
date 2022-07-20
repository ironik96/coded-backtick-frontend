import boardMembersStore from "../../../stores/boardMembersStore";

import Alert from "../Alerts/Alert"
const Swal = require("sweetalert2");
export default function AlertWithButton(message, icon, board, member) {
  return Swal.fire({
    position: "center",
    icon: icon,
    title: message,
    showCancelButton: true,
    confirmButtonText: "Yes",
    confirmButtonColor: "#1DAD91",
  }).then((result) => {
    if (result.isConfirmed) {
      boardMembersStore.deleteMember(board, member);
      console.log(board, member);
      Alert("Deleted ", "success"); 
    } else if (result.isDenied) {
      return "cancel";
    }
  });
}
