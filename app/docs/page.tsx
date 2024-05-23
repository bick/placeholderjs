import Image from "next/image";
import Header from "@/components/header";

export default function Home() {
    return (
        <>
            <Header />
            <div className="container mx-auto max-w-5xl text-center">
                <h1 className="text-7xl font-black leading-tight mb-6">Ridiculously simple placeholders for React</h1>
                <p className="text-xl">A collection of utilities to add placeholders of many kinds to your React project using TypeScript.</p>
            </div>
        </>
    );
}
