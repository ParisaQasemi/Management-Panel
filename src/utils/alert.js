import Swal from "sweetalert2";


export const Alert = (title, text, icon)=> {
    Swal.fire({
        title,
        text,
        icon,
        button: 'متوجه شدم',
      });
}

export const Confirm = (title, text) =>{
  return Swal.fire({
    title,
    text,
    icon:'warning',
    buttons: ['خیر', 'بله'],
    dangerMode: true,
  })
}