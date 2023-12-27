import { useState } from 'react';
import toast from '@/modules/helpers/toast';

const useGlobalToast = () => {  
  const [inError, setInError] = useState(false);   

  function exibirErro(message:any) {
    if (!inError) {
      setInError(true);
      toast.messageError(message, () => setInError(false));
    }
  }
  function exibirSucesso(message:any) {
    if (!inError) {
      setInError(true);
      toast.messageSuccess(message, () => setInError(false));
    }
  }
  return {   
    exibirErro,
    exibirSucesso,   
   
  };
};

export default useGlobalToast;