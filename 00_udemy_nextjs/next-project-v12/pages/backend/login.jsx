//root/pages/backend/login.jsx
/**
 * Login-Seite fuer den Administrationsbereich, sammelt Zugangsdaten und startet Authentifizierungsworkflow.
 * Client Hooks fuer Form-State und Navigation, HTTP-Request zur Login-API, bedingte Fehlerdarstellung im UI.
 * Input Benutzername und Passwort aus Formular, Logic POST gegen Auth-Endpunkt und Redirect bei Erfolg, Output Session-Cookie plus Admin-Zugang.
 * Next.js Besonderheit im Pages Router erfolgt Programmnavigation ueber next/router, geschuetzte Inhalte ueber Cookie-Checks in SSR oder Middleware.
 */

import {useState} from 'react';
import {useRouter} from 'next/router';
import {Form, Button} from 'react-bootstrap';
import axios from 'axios';

export default function login() {

    const [benutzer, setBenutzer] = useState("");
    const [passwort, setPasswort] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter();

    const login = async () => {
        try {
            await axios.post("/api/login", {
                benutzer,
                passwort
            });
            router.push("/backend");
        }
        catch (error) {
            setError(true);
        }
    };
    return (
        <div>
            <h1>Login</h1>
            {error && <p className="text-danger">Login fehlgeschlagen</p>}
            <div className="row mt-4">
                <Form>
                    <Form.Group className="mb-3" controlId="benutzer">
                        <Form.Control type="text" placeholder="Benutzer" onChange={(e) => setBenutzer(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="passwort">
                        <Form.Control type="password" placeholder="Passwort" onChange={(e) => setPasswort(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" onClick={login}>
                        Login
                    </Button>
                </Form>
            </div>
        </div>);
}
