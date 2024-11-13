import Swal from "sweetalert2";

export const Alert = (title, text, icon) => {
  Swal.fire({
    title,
    text,
    icon,
    showConfirmButton: true,
    confirmButtonText: "تایید", 
  });
};

export const Confirm = (title, text) => {
  return Swal.fire({
    title,
    text,
    icon: "warning",
    buttons: ["خیر", "بله"],
    dangerMode: true,
  });
};
