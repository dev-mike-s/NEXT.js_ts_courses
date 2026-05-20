//root/components/Navigation.tsx
/**
 * Navigationskomponente der Anwendung, verknuepft Kernrouten und visualisiert Warenkorb-Status im Header.
 * Client Component mit Hooks useState useEffect und globalem Store-Zugriff, Next Link und optional Next Image fuer Routing und Assets.
 * Input Store- oder Prop-Werte fuer Badge und Ziele, Logic bedingtes Rendering von Navigationszustand, Output klickbare Hauptnavigation.
 * Next.js Besonderheit Link liefert clientseitige Navigation, in Pages Router teils mit a-Child, im App Router direkt als Komponente.
 */

'use client';
import Link from 'next/link';
import Image from 'next/image';
import {useWarenkorbStore} from '@/store/useWarenkorbStore';
import {useEffect, useState} from 'react';

export default function Navigation() {

    const wAnzahl = useWarenkorbStore((state) => state.wAnzahl);
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    return (
        <nav className="bg-red-700 border-b border-red-800 sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 h-20 flex justify-between items-center">

                <Link href="/" className="block">
                    <Image src="/bilder/logo.png" alt="Logo" width={160} height={60} priority style={{objectFit: 'contain'}} className="brightness-0 invert"/>
                </Link>

                <Link href="/warenkorb" className="relative inline-block">
                    <div className="w-[40px] h-[40px] relative">
                        <Image src="/bilder/warenkorb.png" alt="Warenkorb" fill sizes="40px" className="object-contain"/>

                        {mounted && wAnzahl > 0 && (<span className="absolute -top-2 -right-2 bg-white text-red-700 text-[10px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-red-700 shadow-md z-10">
                                {wAnzahl}
                            </span>)}
                    </div>
                </Link>

            </div>
        </nav>);
}
