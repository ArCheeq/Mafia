import { ColorSchemeScript } from "@mantine/core";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";

import Providers from "@/components/Providers";
import Header from "@/features/Header";

import "@mantine/core/styles.css";
import "./globals.css";

const raleway = Raleway({
    weight: ["200", "300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-raleway",
});

export const metadata: Metadata = {
    title: "Liar’s Night",
    description:
        "Dive into the thrilling world of deception and strategy with Liar’s Night, an immersive online Mafia game where you must outwit your opponents to survive.",
    keywords:
        "Mafia, online game, strategy, deception, Liar's Night, multiplayer, social deduction, party game",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript />
            </head>
            <body style={{ ...raleway.style }} className={`${raleway.className}`}>
                <Providers>
                    <Header />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
