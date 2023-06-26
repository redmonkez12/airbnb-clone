import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from "@/app/components/navbar/Navbar";
import { ClientOnly } from "@/app/components/ClientOnly";
import { Modal } from "@/app/components/modals/Modal";
import { RegisterModal } from "@/app/components/modals/RegisterModal";

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
            <RegisterModal/>
            <Navbar/>
        </ClientOnly>
        <div className="pb-20 pt-28">
            {children}
        </div>
        </body>
        </html>
    );
}
