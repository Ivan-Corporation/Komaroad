import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { BrowserRouter } from "react-router-dom";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import 'flag-icon-css/css/flag-icon.min.css'
import FallbackLoading from './FallbackLoading';
import { UserContext } from "./UserContext";


 //Localisaton
 i18n
 .use(initReactI18next) // passes i18n down to react-i18next
 .use(LanguageDetector)
 .use(HttpApi)
 .init({
   supportedLngs: ['en','ru','fr','de','ua'],
   fallbackLng: "en",
   detection: {
     order: ['cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
     caches: ['cookie']
   },
   backend: {
    loadPath: '/assets/locales/{{lng}}/translation.json',
   },
   

 });


 

ReactDOM.render(
  <Suspense fallback={FallbackLoading} >
  <React.StrictMode>
    <UserContext>
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    </UserContext>
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

