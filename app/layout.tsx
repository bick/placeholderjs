import type {Metadata} from "next";
import {Toaster} from "@/components/ui/toaster"
import "@/styles/globals.scss";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
    title: "PlaceholderJS - Ridiculously simple and lightweight placeholders",
    description: "Ridiculously simple and lightweight placeholders",
};

export default function RootLayout({children}: Readonly<{ children: React.ReactNode; }>) {
    return (
        <html lang="en">
        <body>
        <Header/>
        {children}
        <Footer/>
        <Toaster/>
        </body>
        </html>
    );
}
