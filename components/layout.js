import Navbar from "./navbar";
import styles from '../styles/layout.module.css'
import { useDispatch, useSelector } from "react-redux";
import Login from "../pages/login";
import Head from "next/head";
import { useEffect } from "react";
import { csrfTokenApi } from "../api/userApi";
import { getAllCategoriesApi } from "../api/categoriesApi";
import { setCats } from "../redux/dataReducer";

export default function Layout({ children }) {
    const dispatch = useDispatch();
    const token = useSelector(state => state.reducer.user.token)
    const categories = useSelector(state => state.reducer.data.categories)

    useEffect(() => {
        const getCsrfToken = async () => {
            await csrfTokenApi();
            if (categories.length === 0)
                dispatch(setCats(await getAllCategoriesApi(token)))
        }

        getCsrfToken();
    }, [])


    if (token == '' || !token)
        return (<Login />)
    return (
        <div className={styles.container}>
            <Head>
                <title> ادمین اطلس </title>
                <meta name="description" content="ادمین اطلس" />
                <link rel="icon" href="/icons/logo.png" />
            </Head>

            <Navbar />
            {categories.length != 0 ?
                <main className="w-100">{children}</main>
                : null
            }
        </div>
    )
}