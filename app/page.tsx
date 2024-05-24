import Code from "@/components/ui/code";
import {FaNpm} from "react-icons/fa";

export default function Home() {
    return (
        <>
            <div className="flex container mx-auto max-w-5xl text-center h-[80vh] hero">
                <div className="flex flex-col my-auto">
                    <h1 className="text-7xl font-black leading-tight mb-6">Ridiculously simple and lightweight
                        placeholders</h1>
                    <p className="text-2xl mb-12">A free placeholder service designed for developers. Integrates
                        seamlessly with React & NextJS</p>
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
                        scheme <code>https://placeholderjs.com/HEIGHTxWIDTH</code>.</p>

                    <h3 className="text-3xl font-black leading-tight mb-4">Size</h3>
                    <p className="text-xl mb-8 opacity-75">Specify the size of the placeholder image by adding the width
                        and
                        height to the URL. Here is an example of how that works for a <code>500 x 500</code> image.</p>
                    <Code code="https://placeholderjs.com/500x500"/>

                    <h3 className="text-3xl font-black leading-tight mt-12 mb-4">Text</h3>
                    <p className="text-xl mb-8 opacity-75">Specify custom text in the placeholder image by adding your text to the URL. Here is an example of how that works for <code>Hello World!</code></p>
                    <Code code="https://placeholderjs.com/500x500?text=Hello+World!"/>
                </div>
            </div>
        </>
    );
}
