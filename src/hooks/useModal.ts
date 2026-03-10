import { useState, useCallback } from 'react';

interface UseModalReturn {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

export const useModal = (): UseModalReturn => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    setIsModalOpen(prev => !prev);
  }, []);

  return {
    isModalOpen,
    openModal,
    closeModal,
    toggleModal,
  };
};
