import Sidebar from "@/components/sidebar";

export default function MdxLayout({children}: { children: React.ReactNode }) {
    return (
        <div className="flex container">
            <Sidebar/>
            <div className="container">
                {children}
            </div>
        </div>
    )
}