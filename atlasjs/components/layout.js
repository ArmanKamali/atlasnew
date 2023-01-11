import styles from '../styles/layout.module.css'
import Head from "next/head";
import Navbar from './navbar/navbar';
import Footer from './footer/footer';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCatApi, getCategoryApi } from '../api/product';
import { setNavbarCategory } from '../redux/constsReducer';
import { setCategory } from '../redux/productReducer';
import { setCatRefresh } from '../redux/eventReducer';

export default function Layout({ children }) {
    const cat_refresh = useSelector(state => state.reducer.event.cat_refresh)
    const dispatch = useDispatch()
    useEffect(() => {
        const getCategory = async () => {
            let result = await getCategoryApi();
            dispatch(setNavbarCategory(result.filter(item => item.type === 1)))
            dispatch(setCategory(result))

        }

        getCategory();
    }, [])

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

            <Navbar />
            <main className={styles.mainWrapper}>{children}</main>
            <Footer />
        </div>
    )
}