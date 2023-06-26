"use client";

type MenuItemProps = {
    onClick(): void;
    label: string;
};

export function MenuItem({ label, onClick }: MenuItemProps) {
    return (
        <div
            onClick={() => {}}
            className="
            px-4
            py-3
            hover:bg-neutral-100
            transition
            font-semibold
        ">{label}</div>
    );
}