const Swal = require("sweetalert2");
export default function  Alert  (message, icon)  {
  return Swal.fire({
    position: "center",
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};



// icons used  in swal:
// success
// error
// warning
