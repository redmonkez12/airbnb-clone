import './globals.css'
import { Nunito } from 'next/font/google'
import { Navbar } from "@/app/components/navbar/Navbar";

const nunito = Nunito({ subsets: ['latin'] })

export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
      <Navbar/>
      {children}
      </body>
    </html>
  )
}
