const Swal = require("sweetalert2");
const Alert = (message, icon) => {
  return Swal.fire({
    position: "center",
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};

export default Alert;
// icons used  in swal:
// success
// error
// warning
