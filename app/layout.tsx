import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from "@/app/components/navbar/Navbar";
import { ClientOnly } from "@/app/components/ClientOnly";
import { Modal } from "@/app/components/modals/Modal";

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb clone',
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={nunito.className}>
        <ClientOnly>
            <Modal actionLabel={"Submit"} title={"Hello world"} isOpen/>
            <Navbar/>
        </ClientOnly>
        {children}
        </body>
        </html>
    );
}
