//root/redux/store.js
/**
 * Redux-Store-Einstiegspunkt, registriert globale State-Slices fuer den Warenkorbfluss der Anwendung.
 * Redux Toolkit configureStore, Reducer-Kombination, unidirektionaler State-Container ohne lokale React-Hooks.
 * Input Slice-Reducer-Definitionen, Logic Store-Initialisierung und Action-Routing, Output zentraler Store fuer Provider und useSelector.
 * React Besonderheit Client-State wird ueber Redux Hooks konsumiert, entkoppelt Komponenten von direkter Zustandsmutation.
 */

import {configureStore} from '@reduxjs/toolkit';
import warenkorbReducer from './warenkorbSlice';

export default configureStore({
    reducer: {
        warenkorb: warenkorbReducer
    },
});
