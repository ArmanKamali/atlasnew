import Image from 'next/image';
import styles from './navbar.module.css'

import {Item, Items} from './index';
const Navbar = () => {
    
    return (
        <div className={styles.container}>
            {Items.map(item => <Item data={item} key={item.id} />)}
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