import {useWallet} from '@solana/wallet-adapter-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/Home.module.css';
import {WalletMultiButton} from '../wallet-adapter-react-ui';

const Home: NextPage = () => {
    const {wallet} = useWallet()
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    {wallet?.adapter()?.publicKey?.toBase58() ?? 'Wallet not connected.'}
                </h1>
                <WalletMultiButton />

            </main>

        </div>
    );
};

export default Home;
