import styles from './navbar.module.css'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';


import { ProductsNavbar, LeftSide, Search, Main } from './index';

const Navbar = () => {

    const items = useSelector(state => state.reducer.consts.navbar_items)
    const {asPath} = useRouter()
    const url = window.location.pathname.split('/')

    // Hookers
    const [showNavbar, setShowNavbar] = useState(true)
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        setShowNavbar(url[1] === 'products' ? false : true)
    }, [asPath])

    
    useEffect(()=>{

    },[showNavbar])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {/* if we are in products page it shows menu  */}
                {url[1] === 'products' ?
                    <ProductsNavbar
                        showNavbar={showNavbar}
                        setShowNavbar={setShowNavbar}
                        catEname={url[2]}
                        showSearch={showSearch}
                        setShowSearch={setShowSearch}
                    />
                    : null
                }
                {showNavbar ?
                    <Main items={items} /> : null
                }
                <LeftSide />
            </div>
            {showSearch ?
                <Search />
                : null
            }
        </div>
    );
}

export default Navbar;