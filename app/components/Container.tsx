"use client";

import { PropsWithChildren } from "react";

type ContainerProps = {

};

export function Container({ children }: PropsWithChildren<ContainerProps>) {
    return (
        <div className={"max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"}>{children}</div>
    );
}