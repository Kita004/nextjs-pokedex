import Image from "next/image";
import Link from "next/link";

export default function InventoryLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <nav>
                Inventory
                <Link href="/">Go to Home</Link>
            </nav>
            <main>{children}</main>
        </>
    );
}
