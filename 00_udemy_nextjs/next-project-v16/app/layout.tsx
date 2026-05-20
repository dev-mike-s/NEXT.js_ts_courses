//root/app/layout.tsx
/**
 * Root Layout der App-Router-Anwendung, definiert dauerhaftes Shell-UI und globale Dokumentstruktur.
 * Metadata-Export, Layout-Props mit children, Server-Component-Komposition, Einbindung globaler Styles und Shared-Navigation.
 * Input geroutete Child-Segmente, Logic Einbettung in html und body sowie Rahmenkomponenten, Output konsistentes Seitenlayout.
 * Next.js Besonderheit app/layout.tsx ist verpflichtend im App Router und ersetzt die Kombination aus _app und _document.
 */

import "./globals.css";
import type {Metadata} from "next";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {Toaster} from "sonner";

export const metadata: Metadata = {
    title: "Liefermax v16",
    description: "Modern App Router stack with MongoDB and Tailwind v4",
};

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="de">
            <body className="antialiased bg-gray-50 text-gray-900 flex flex-col min-h-screen">
            <Toaster position="top-center" richColors/>
            <Navigation/>
            <main className="flex-grow max-w-7xl mx-auto px-4 w-full">{children}</main>
            <Footer/>
            </body>
        </html>);
}
