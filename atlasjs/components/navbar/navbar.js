import Image from 'next/image';
import styles from './navbar.module.css'

import {Item} from './index';
import { useSelector } from 'react-redux';
const Navbar = () => {
    const items = useSelector(state => state.reducer.consts.navbar_items) 
    return (
        <div className={styles.container}>
            {items.map(item => <Item data={item} key={item.id} />)}
            <div>
                <Image
                    src="/icons/logo.png"
                    alt="logo"
                    width="58"
                    height="58" />
            </div>
        </div>
    );
}

export default Navbar;