import styles from './navbar.module.css'
import Link from 'next/link';

import Item from "./item";

const Main = ({ items }) => {
    return (
        <div className={styles.itemswrapper}>
            {items.map(item => <Item data={item} key={item.id} />)}
            <div>
                <Link className="fw-bold" href="/">
                    شیشه خم اطلس
                </Link>
            </div>
        </div>
    );
}

export default Main;