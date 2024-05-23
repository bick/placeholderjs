import Code from "@/components/ui/code";

export default function Home() {
    return (
        <>
            <div className="flex container mx-auto max-w-5xl text-center h-[70vh]">
                <div className="flex flex-col my-auto">
                    <h1 className="text-7xl font-black leading-tight mb-6">Ridiculously simple placeholders for
                        React</h1>
                    <p className="text-xl mb-12">A collection of utilities to add placeholders of many kinds to your React
                        project
                        using TypeScript.</p>
                    <Code code="npm install placeholder" />
                </div>
            </div>
        </>
    );
}
