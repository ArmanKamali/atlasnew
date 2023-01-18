import styles from './navbar.module.css'
import { useRouter } from 'next/router'

import { Item } from './index';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ProductsNavbar from './productsNavbar';
import LeftSide from './leftSide';
import Search from './search';
const Navbar = ({ }) => {
    const items = useSelector(state => state.reducer.consts.navbar_items)
    const { asPath } = useRouter()
    const [showNavbar, setShowNavbar] = useState(true)
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        setShowNavbar(asPath.split('/')[1] === 'products' ? false : true)
    }, [asPath])
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {/* if we are in products page it shows menu  */}
                {asPath.split('/')[1] === 'products' ?
                    <ProductsNavbar
                        showNavbar={showNavbar}
                        setShowNavbar={setShowNavbar}
                        catEname={asPath.split('/')[2]}
                        showSearch={showSearch}
                        setShowSearch={setShowSearch}
                    />
                    : null
                }
                {showNavbar ?
                    <div className={styles.itemswrapper}>
                        {items.map(item => <Item data={item} key={item.id} />)}
                        <div>
                            <Link className="fw-bold" href="/">
                                شیشه خم اطلس
                            </Link>
                        </div>
                    </div> : null
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