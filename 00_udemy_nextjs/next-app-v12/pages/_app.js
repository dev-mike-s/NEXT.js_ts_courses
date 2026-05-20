//root/pages/_app.js
/**
 * Globaler Einstieg der Pages-Router-App, injiziert Layout und gemeinsame Styles fuer jede Seitenrenderung.
 * Custom App Pattern, Component und pageProps Injection, globale CSS-Imports, Komposition ueber Wrapper-Komponente.
 * Input aktive Page-Komponente plus vorgerenderte Props, Logic Einbettung in Layout, Output vollstaendig gerenderte Seite.
 * Next.js Besonderheit _app.js steuert seitenuebergreifende Initialisierung und ersetzt per-page Boilerplate im Pages Router.
 */

import Layout from '../komponenten/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({Component, pageProps}) {

    return (
        <Layout>
            <Component {...pageProps}/>
        </Layout>);
}

export default MyApp;