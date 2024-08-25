import { showModalCart } from '@/jotai/atoms';
import { useAtom } from 'jotai';

const useModalCart = () => {
  const [isOpen, setIsOpen] = useAtom(showModalCart);
  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return { isOpen, onOpen, onClose };
};

export default useModalCart;
