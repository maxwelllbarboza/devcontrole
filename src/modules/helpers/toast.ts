import { toast } from "react-toastify";

function messageError(message: any, callback:any) {
  toast.error(message, {
    position: "top-right",
    autoClose: 2000,
    theme: "light",
    closeOnClick: true,
    pauseOnHover: false,
    onClose: () => callback(),
  });
}

function messageSuccess(message: any, callback:any) {
  toast.success(message, {
    position: "top-right",
    autoClose: 2000,
    theme: "light",
    closeOnClick: true,
    pauseOnHover: false,
    
    onClose: () => callback(),
  });
}

// eslint-disable-next-line
export default { messageError, messageSuccess };