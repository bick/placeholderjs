import type {Metadata} from "next";
import {ThemeProvider} from "@/components/theme-provider"
import {Toaster} from "@/components/ui/toaster"
import "@/styles/globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Nprogress from "@/components/nprogress";

export const metadata: Metadata = {
    title: "PlaceholderJS - Ridiculously simple and lightweight placeholders", description: "Ridiculously simple and lightweight placeholders",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <Nprogress/>
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
