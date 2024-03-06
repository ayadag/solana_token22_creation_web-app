import { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { AppBar } from "../components/AppBar";
import { BalanceDisplay } from "../components/BalanceDisplay";
import CreateMintForm  from "../components/CreateMint";
import Head from "next/head";
import dynamic from "next/dynamic";
import SetTransferFeeForm from "../components/SetTransferFeeForm";
import TransferWithZeroFee from "../components/TransferWithZeroFee";

const Home: NextPage = (props) => {

  return (
      <div className={styles.App}>
        <Head>
          <title>CryptoAirlines Token Management Panel</title>
          <meta name="description" content="Token Program"/>
        </Head>
          <div className={styles.AppBody}>
            {/*<BalanceDisplay/>*/}
            {/*<CreateMintForm/>*/}
            {/*<SetTransferFeeForm/>*/}
            {/*<TransferWithZeroFee/>*/}
              Please connect your wallet and choose a section from app navigation bar to continue
          </div>
      </div>
  );
};

export default Home;
