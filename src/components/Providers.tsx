import { PropsWithChildren } from "react";
import { createTheme, MantineProvider, MantineProviderProps } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import localFont from "next/font/local";

const geistSans = localFont({
    src: "../app/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});

const geistMono = localFont({
    src: "../app/fonts/GeistVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

const theme = createTheme({
    fontFamily: geistSans.style.fontFamily,
    fontFamilyMonospace: geistMono.style.fontFamily,
    primaryColor: "deep-red",
    colors: {
        "deep-red": [
            "#ffe9e9",
            "#ffd0d0",
            "#fd9d9d",
            "#fc6766",
            "#fc3b38",
            "#fc231c",
            "#fd160e",
            "#e20a03",
            "#c90000",
            "#b00000",
        ],
    },
});

const ProviderOptions: Partial<MantineProviderProps> = {
    theme,
    defaultColorScheme: "dark",
    withCssVariables: true,
};

export default function Providers({ children }: PropsWithChildren) {
    return (
        <MantineProvider {...ProviderOptions}>
            {children}
            <Notifications />
        </MantineProvider>
    );
}
