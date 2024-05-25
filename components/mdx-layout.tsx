import Sidebar from "@/components/sidebar";

export default function MdxLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className="block text-xl border-b border-t font-semibold py-3 mb-6">
                <div className="flex container">
                    Documentation
                    <span className="text-[14px] ml-auto opacity-75 font-normal">Last updated: May 24, 2024</span>
                </div>
            </div>
            <div className="flex container">
                <Sidebar/>
                <div className="flex flex-col">
                    {children}
                </div>
            </div>
        </>
    )
}