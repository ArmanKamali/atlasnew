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
                <title> ادمین اطلس </title>
                <meta name="description" content="ادمین اطلس" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>

            <Navbar />
            <main className="w-100">{children}</main>
        </div>
    )
}