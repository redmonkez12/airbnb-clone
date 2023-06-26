"use client";

import { PropsWithChildren, useEffect, useState } from "react";

type ClientOnlyProps = {

};

export function ClientOnly({ children }: PropsWithChildren<ClientOnlyProps>) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return (
        <div>
            {children}
        </div>
    );
}