import './globals.css';
import { Nunito } from 'next/font/google';
import { Navbar } from "@/app/components/navbar/Navbar";
import { ClientOnly } from "@/app/components/ClientOnly";
import { Modal } from "@/app/components/modals/Modal";
import { RegisterModal } from "@/app/components/modals/RegisterModal";
import { getCurrentUser } from "@/app/actions/getCurrentUser";
import { LoginModal } from "@/app/components/modals/LoginModal";
import { RentModal } from "@/app/components/modals/RentModal";

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
    title: 'Airbnb',
    description: 'Airbnb clone',
};

export default async function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();

    return (
        <html lang="en">
        <body className={nunito.className}>
        <ClientOnly>
            <RegisterModal/>
            <RentModal/>
            <LoginModal/>
            <Navbar currentUser={currentUser}/>
        </ClientOnly>
        <div className="pb-20 pt-28">
            {children}
        </div>
        </body>
        </html>
    );
}
