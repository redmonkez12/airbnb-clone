import { create } from "zustand";

type RegisterModalStore = {
    isOpen: boolean;
    onOpen(): void;
    onClose(): void;
};

export function useRegisterModal() {
    return (
        <div>a</div>
    );
}