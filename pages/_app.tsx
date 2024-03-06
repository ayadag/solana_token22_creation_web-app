import '../styles/globals.css'
import {AppBar} from "../components/AppBar";
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";

function MyApp({ Component, pageProps }) {
    const WalletContextProvider = dynamic(() => import('../components/WalletContextProvider'), { ssr: false })


    return (
        <>
            <WalletContextProvider>
                <AppBar/>
                <Component {...pageProps} />
            </WalletContextProvider>
        </>
    );
}

export default MyApp;