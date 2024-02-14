import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { AppBar } from "../components/AppBar";
import { BalanceDisplay } from "../components/BalanceDisplay";
import CreateMintForm  from "../components/CreateMint";
import Head from "next/head";
import dynamic from "next/dynamic";

const Home: NextPage = (props) => {

    // Added for Hydration by-pass
    const WalletContextProvider = dynamic(() => import('../components/WalletContextProvider'), { ssr: false })
    return (
    <div className={styles.App}>
      <Head>
        <title>CryptoAirlines Token Creation Form</title>
        <meta name="description" content="Token Program" />
      </Head>
      <WalletContextProvider>
        <AppBar />
        <div className={styles.AppBody}>
          <BalanceDisplay />
          <CreateMintForm/>
        </div>
      </WalletContextProvider>
    </div>
  );
};

export default Home;
