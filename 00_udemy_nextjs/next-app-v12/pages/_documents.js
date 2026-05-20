//root/pages/_documents.js
/**
 * Custom Document fuer serverseitiges HTML-Grundgeruest, definiert globale html-, head- und body-Struktur.
 * Document-Klasse aus next/document, static getInitialProps, Html Head Main NextScript als Pflichtbausteine.
 * Input DocumentContext vom Serverrendering, Logic Sammeln initialer Props, Output finales Dokument-Markup fuer Response.
 * Next.js Besonderheit _document laeuft nur serverseitig, unterscheidet sich klar von Komponentenlogik in _app und Pages.
 */

import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {

    static async getInitialProps(ctx) {

        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    render() {
        return (
            <Html lang="de">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>);
    }
}
export default MyDocument;
