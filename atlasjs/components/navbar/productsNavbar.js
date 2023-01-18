import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './navbar.module.css'
import Search from './search';


const ProductsNavbar = ({ showNavbar, setShowNavbar, catEname, showSearch, setShowSearch }) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    // get all categories and find witch category we are in
    const categories = useSelector(state => state.reducer.products.category)
    const [category, setCategory] = useState(false)
    useEffect(() => {
        setCategory(categories.filter(category => category.engName === catEname)[0])
    }, [catEname])

    // search
    return (
            <div className={`d-flex ${!showNavbar ? 'w-100' : null} flex-column`}>
                <div className="d-flex flex-row align-items-center me-4 fs-4 w-100 ">
                    <Image
                        src={`/icons/${showSearch ? 'search-active' : 'search'}.png`}
                        width={20}
                        height={20}
                        alt="search-icon"
                        onClick={() => setShowSearch(!showSearch)} />


                    <div className="pe-2 ps-2" onClick={() => { setShowNavbar(!showNavbar) }}>
                        {!showNavbar ?
                            <u>فهرست</u> :
                            <div>X</div>
                        }
                    </div>
                </div>
                {!showNavbar && category ?
                    <div className={`${styles.categoryName} ${scrollPosition !== 0 || showSearch ? styles.categoryNameMiddle : null}`}>
                        {catEname !== 'all' ? category.name : 'کل محصولات'}
                    </div> :
                    null
                }
            </div>
    );
}

export default ProductsNavbar;