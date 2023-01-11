import styles from '../../styles/navbar.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

const NavbarItem = ({pageInfo}) => {
    const router = useRouter();
    const isActive = '/' + pageInfo.name === router.asPath
    return (  
        <Link href= {`/${pageInfo.name}`} className={`${styles.item} ${isActive ? styles.active : ''}`}>
            {pageInfo.perName}
        </Link>
    );
}
 
export default NavbarItem;