import { create } from "zustand";

type RegisterModalStore = {
    isOpen: boolean;
    onOpen(): void;
    onClose(): void;
};

export const useRegisterModal = create<RegisterModalStore>((set) => {
    return {
        isOpen: false,
        onClose: () =>  set({ isOpen: false }),
        onOpen: () => set({ isOpen: true }),
    };
});