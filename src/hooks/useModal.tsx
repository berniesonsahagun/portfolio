import { useState, useCallback, MouseEventHandler } from "react";

const useModal = (
  initialState = false
): [
  boolean,
  MouseEventHandler<HTMLElement>,
  MouseEventHandler<HTMLElement>
] => {
  const [isOpen, setIsOpen] = useState(initialState);

  const openModal: MouseEventHandler<HTMLElement> = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeModal: MouseEventHandler<HTMLElement> = useCallback(() => {
    setIsOpen(false);
  }, []);

  return [isOpen, openModal, closeModal];
};

export default useModal;
