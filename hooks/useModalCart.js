import { useAtom } from 'jotai';

const { showModalCart } = require('@/jotai/atoms');

const useModalCart = () => {
    const [isOpen, setIsOpen] = useAtom(showModalCart);
    const onOpen = () => setIsOpen(true);
    const onClose = () => setIsOpen(false);
  
    return { isOpen, onOpen, onClose };
  };

  export default useModalCart;