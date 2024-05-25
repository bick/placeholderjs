import Code from "@/components/ui/code";
import {Badge} from "@/components/ui/badge"
import {Button} from "@/components/ui/button"
import {FaNpm} from "react-icons/fa";
import {IoDocumentText} from "react-icons/io5";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <div className="flex container mx-auto max-w-5xl text-center h-[80vh] hero">
                <div className="flex flex-col my-auto">
                    <h1 className="text-7xl font-black leading-tight mb-6">Ridiculously simple and lightweight
                        placeholders</h1>
                    <p className="text-2xl mb-12">A free placeholder service designed for developers. Integrates
                        seamlessly with React & NextJS.</p>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col ">
                            <span className="text-xl font-bold mb-2 h-8">CDN</span>
                            <Code code="https://placeholderjs.com/500x500"/>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-4xl font-bold mb-2 mx-auto h-8"><FaNpm/></span>
                            <Code code="npm install placeholder"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex container mx-auto text-center py-12 justify-center">
                <div className="flex flex-col" id="usage">
                    <h2 className="text-4xl font-black leading-tight mb-4">Using the CDN</h2>
                    <p className="text-xl mb-24 opacity-75">To use PlaceholderJS via the CDN for simplicity and/or
                        compatibility
                        with non-JS tools, you can simply use the
                        scheme <code>https://placeholderjs.com/HEIGHTxWIDTH</code>. All
                        image placeholders <strong>must</strong> have a height and width defined.</p>

                    <h3 className="text-3xl font-black leading-tight mb-2">Size</h3>
                    <Badge variant="outline" className="mx-auto">REQUIRED</Badge>
                    <p className="text-xl mb-8 opacity-75">Specify the size of the placeholder image by adding the width
                        and
                        height to the URL. Here is an example of how that works for a <code>500 x 500</code> image. All
                        image placeholders must have a height and width defined.</p>
                    <Code code="https://placeholderjs.com/500x500"/>
                    <h3 className="text-3xl font-black leading-tight mt-12 mb-4">Text</h3>
                    <p className="text-xl mb-8 opacity-75">Specify custom text in the placeholder image by adding your
                        text to the URL. Here is an example of how that works for <code>Hello World!</code></p>
                    <Code code="https://placeholderjs.com/500x500?text=Hello+World!"/>
                </div>
            </div>
            <div className="flex container mt-12 mx-auto text-center py-12 justify-center">
                <div className="flex flex-col" id="usage">
                    <h2 className="text-4xl font-black leading-tight mb-4">Using with JS</h2>
                    <p className="text-xl mb-8 opacity-75">PlaceholderJS works seamlessly with all major JavaScript
                        frameworks including React, NextJS, </p>
                    <Button className="mx-auto" asChild>
                        <Link href="/docs">
                            <IoDocumentText className="mr-2 h-4 w-4"/> View PlaceholderJS Docs
                        </Link>
                    </Button>
                </div>
            </div>
        </>
    );
}
