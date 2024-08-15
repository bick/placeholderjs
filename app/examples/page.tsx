import Code from "@/components/ui/code";
import {Badge} from "@/components/ui/badge"
import {FaNpm} from "react-icons/fa";
import styles from "@/styles/layout.module.scss";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";

export default function Home() {
    return (
        <div className={styles.layout}>
            <div className="flex container mx-auto max-w-5xl text-center hero">
                <div className="flex flex-col my-auto">
                    <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">Ridiculously simple and
                        lightweight
                        placeholders</h1>
                    <p className="text-2xl mb-12">A free placeholder service designed for developers. Integrates
                        seamlessly with React & NextJS.</p>
                    <div className="flex flex-col md:grid md:grid-cols-2">
                        <div className="flex flex-col mb-6 md:mb-0">
                            <span className="text-xl font-bold mb-2 h-8">CDN</span>
                            <Code type="command" code="https://placeholderjs.com/500x500"/>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-[42px] font-bold mb-2 mx-auto h-8 flex align-center"><FaNpm/></span>
                            <Code type="command" code="npm install placeholder"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="usage container text-center">

            </div>
        </div>
    );
}
