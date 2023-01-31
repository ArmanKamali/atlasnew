import Navbar from "./navbar";
import styles from '../styles/layout.module.css'
import { useSelector } from "react-redux";
import Login from "../pages/login";
import Head from "next/head";
import { useEffect } from "react";
import { csrfTokenApi } from "../api/userApi";

export default function Layout({ children }) {
    useEffect(() => {
        const getCsrfToken = async () => {
            await csrfTokenApi();
        }

        getCsrfToken();
    }, [])
    const token = useSelector(state => state.reducer.user.token)
    if (token == '')
        return (<Login />)
    return (
        <div className={styles.container}>
            <Head>
                <title>داشبورد ادمین مارک گلد - نسخه بتا</title>
                <meta name="description" content="داشبورد ادمین مارک گلد" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>

            <Navbar />
            <main>{children}</main>
        </div>
    )
}