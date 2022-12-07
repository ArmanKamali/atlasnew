import styles from '../styles/layout.module.css'
import Head from "next/head";
import Navbar from './navbar/navbar';
import Footer from './footer/footer';

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>شیشه خم اطلس</title>
                <meta name="title" content="شیشه خم اطلس" />
                <meta name="description" content="شیشه خم اطلس اولین و بزرگترین تولید کننده و صادر کننده میزهای جلو مبلی و تلوزیون و دکوارتیو شیشه خم نود درجه در ایران است. " />
                <meta name="keywords" content="دکوراتیو شیشه خم , میز جلو مبلی , میز شیشه ای" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

                <link rel="icon" href="/icons/logo.png" />
            </Head>

            <Navbar/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}