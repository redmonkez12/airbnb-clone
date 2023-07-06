import { IconType } from "react-icons";

type CategoryBoxProps = {
    icon: IconType;
    label: string;
    selected?: boolean;

};

export function CategoryBox({ icon: Icon, label, selected }: CategoryBoxProps) {
    return (
        <div className={
            `flex
            flex-col
            items-center
            justify-center
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected ? "border-b-neutral-800" : "border-transparent"}
            ${selected ? "text-neutral-800" : "text-neutral-500"}
            `}>
            <Icon size={26}/>
        </div>
    );
}