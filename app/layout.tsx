import type {Metadata} from "next";
import {ThemeProvider} from "@/components/theme-provider"
import {Toaster} from "@/components/ui/toaster"
import "@/styles/globals.scss";
import styles from "@/styles/layout.module.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "Create Next App", description: "Generated by create next app",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body className={styles.layout}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            {children}
            <Footer/>
            <Toaster/>
        </ThemeProvider>
        </body>
        </html>
    );
}
