//root/pages/_app.js
/**
 * Globaler Einstieg der Pages-Router-App, injiziert Layout und gemeinsame Styles fuer jede Seitenrenderung.
 * Custom App Pattern, Component und pageProps Injection, globale CSS-Imports, Komposition ueber Wrapper-Komponente.
 * Input aktive Page-Komponente plus vorgerenderte Props, Logic Einbettung in Layout, Output vollstaendig gerenderte Seite.
 * Next.js Besonderheit _app.js steuert seitenuebergreifende Initialisierung und ersetzt per-page Boilerplate im Pages Router.
 */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../komponenten/Layout';
import '../styles/custom.scss';
import store from '../redux/store';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

function MyApp({Component, pageProps}) {

    return (
        <Provider store={store}>
            <ToastContainer />
            <Layout>
                <Component {...pageProps}/>
            </Layout>
        </Provider>);
}

export default MyApp;