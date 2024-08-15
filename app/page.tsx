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
                <Tabs defaultValue="cdn" className="w-full">
                    <div className="flex justify-center">
                        <TabsList className="mb-6 justify-center mx-auto">
                            <TabsTrigger value="cdn" className="text-xl font-bold">
                                CDN
                            </TabsTrigger>
                            <TabsTrigger value="npm" className="text-xl font-bold flex items-center">
                                <FaNpm className="mr-2"/> NPM
                            </TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="cdn">
                        <div className="flex flex-col">
                            <h2 className="text-4xl font-black leading-tight mb-4">Using the CDN</h2>
                            <p className="text-xl mb-24 opacity-75">
                                To use PlaceholderJS via the CDN for simplicity and/or compatibility with non-JS
                                tools,
                                you can simply use the scheme <code>https://placeholderjs.com/HEIGHTxWIDTH</code>.
                                All
                                image placeholders <strong>must</strong> have a height and width defined.
                            </p>

                            <h3 className="text-3xl font-black leading-tight mb-2">Size</h3>
                            <Badge variant="outline" className="mx-auto">REQUIRED</Badge>
                            <p className="text-xl mb-8 opacity-75">
                                Specify the size of the placeholder image by adding the width and height to the URL.
                                Here is an example of how that works for a <code>500 x 500</code> image.
                            </p>
                            <Code type="command" code="https://placeholderjs.com/500x500"/>

                            <h3 className="text-3xl font-black leading-tight mt-12 mb-4">Text</h3>
                            <Badge variant="outline" className="mx-auto">OPTIONAL</Badge>
                            <p className="text-xl mb-8 opacity-75">
                                Specify custom text in the placeholder image by adding your text to the URL. Here is
                                an example of how that works for <code>Hello World!</code>. Use
                                a <code>+</code> character for spaces.
                            </p>
                            <Code type="command" code="https://placeholderjs.com/500x500&text=Hello+World!"/>

                            <h3 className="text-3xl font-black leading-tight mt-12 mb-2">Text Color</h3>
                            <Badge variant="outline" className="mx-auto">OPTIONAL</Badge>
                            <p className="text-xl mb-8 opacity-75">
                                Specify the text color by adding <code>color=</code> to the URL. For now, we only
                                support HEX values or named values (e.g. white). Since we can't use <code>#</code> for
                                the color code, you must use an underscore _ before the HEX code.
                            </p>
                            <Code type="command"
                                  code="https://placeholderjs.com/500x500&text=Hello+World!&color=_fff"/>

                            <h3 className="text-3xl font-black leading-tight mt-12 mb-2">Background Color</h3>
                            <Badge variant="outline" className="mx-auto">OPTIONAL</Badge>
                            <p className="text-xl mb-8 opacity-75">
                                Specify the background color by adding <code>background=</code> to the component.
                                For now, we only support HEX values or named values (e.g. white). Since we can't use <code>#</code> for
                                the color code, you must use an underscore _ before the HEX code.
                            </p>
                            <Code type="command" code="https://placeholderjs.com/500x500&background=_000"/>
                        </div>
                    </TabsContent>
                    <TabsContent value="npm">
                        <div className="flex flex-col">
                            <h2 className="text-4xl font-black leading-tight mb-4">Using with React</h2>
                            <p className="text-xl opacity-75">
                                To use PlaceholderJS with React or any React framework, simply install via NPM or
                                your preferred package manager.
                            </p>
                            <Code type="command" code="npm i placeholder"/>
                            <p className="text-xl mb-4 mt-8 opacity-75">Next, import the package.</p>
                            <Code type="command" code={`import { Placeholder } from 'placeholder'`}/>

                            <h3 className="text-3xl font-black leading-tight mt-12 mb-2">Size</h3>
                            <Badge variant="outline" className="mx-auto">REQUIRED</Badge>
                            <p className="text-xl mb-8 opacity-75">
                                Specify the size of the placeholder image by adding the width and height to the
                                component. Here is an example of how that works for a <code>500 x 500</code> image.
                            </p>
                            <Code type="command" code={`<Placeholder width="500" height="500" />`}/>

                            <h3 className="text-3xl font-black leading-tight mt-12 mb-4">Text</h3>
                            <Badge variant="outline" className="mx-auto">OPTIONAL</Badge>
                            <p className="text-xl mb-8 opacity-75">
                                Specify custom text in the placeholder image by adding your text. Here is an example
                                of how that works for <code>Hello World!</code>. Use a <code>+</code> character for
                                spaces.
                            </p>
                            <Code type="command"
                                  code={`<Placeholder width="500" height="500" text="Hello World!" />`}/>

                            <h3 className="text-3xl font-black leading-tight mt-12 mb-2">Text Color</h3>
                            <Badge variant="outline" className="mx-auto">OPTIONAL</Badge>
                            <p className="text-xl mb-8 opacity-75">
                                Specify the text color by adding <code>color=</code> to the component. For now, we
                                only support HEX values or named values (e.g. white).
                            </p>
                            <Code type="command"
                                  code={`<Placeholder width="500" height="500" text="Hello World!" color="#fff"/>`}/>

                            <h3 className="text-3xl font-black leading-tight mt-12 mb-2">Background Color</h3>
                            <Badge variant="outline" className="mx-auto">OPTIONAL</Badge>
                            <p className="text-xl mb-8 opacity-75">
                                Specify the background color by adding <code>background=</code> to the component.
                                For now, we only support HEX values or named values (e.g. white).
                            </p>
                            <Code type="command"
                                  code={`<Placeholder width="500" height="500" background="#000" />`}/>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
}
