//root/app/backend/login/page.tsx
/**
 * Login-Page im App Router, bietet Zugangspunkt fuer geschuetzte Admin-Funktionen mit Formular-Interaktion.
 * Client Component mit useState und useRouter aus next/navigation, API-POST und bedingte Fehlerrueckmeldung.
 * Input Formularfelder fuer Credentials, Logic Anfrage an Login-Endpoint und Navigation bei Erfolg, Output Sessionaufbau und Routewechsel.
 * Next.js Besonderheit App-Router Navigation verwendet next/navigation, Zugriffsschutz wird durch Middleware und Cookies abgesichert.
 */

'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import axios from 'axios';
import {toast} from 'sonner';

export default function LoginPage() {

    const [benutzer, setBenutzer] = useState("");
    const [passwort, setPasswort] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await axios.post("/api/login", {benutzer, passwort});
            if (res.status === 200) {
                router.push("/backend");
                router.refresh();
            }
        }
        catch (err) {
            setError(true);
        }
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center">
            <div className="bg-white p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200 border border-gray-100 w-full max-w-md">
                <h1 className="text-3xl font-black uppercase italic tracking-tighter mb-8 text-center">
                    Admin <span className="text-red-600">Login</span>
                </h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    <input type="text" placeholder="Benutzername" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none font-medium" onChange={(e) => setBenutzer(e.target.value)}/>
                    <input type="password" placeholder="Passwort" className="w-full p-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600 outline-none font-medium" onChange={(e) => setPasswort(e.target.value)}/>

                    {error && (<p className="text-red-600 text-sm font-bold text-center italic">
                            Daten ungültig
                        </p>)}

                    <button type="submit" className="w-full bg-red-700 hover:bg-red-800 text-white font-black py-4 rounded-2xl shadow-lg transition-all active:scale-95 uppercase tracking-widest text-sm mt-4">
                        Einloggen
                    </button>
                </form>
            </div>
        </div>);
}
