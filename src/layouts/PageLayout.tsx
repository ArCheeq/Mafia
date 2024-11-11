import { Fragment } from "react";

import Header from "@/features/Header";

export default function PageLayout({ children }: { children: React.ReactNode }) {
    return (
        <Fragment>
            <Header />
            {children}
        </Fragment>
    );
}
