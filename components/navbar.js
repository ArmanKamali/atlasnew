import { useRouter } from 'next/navigation';
import styles from '../styles/navbar.module.css'
import {Profile} from './navbar/index'
import NavbarItem from './utils/navbarItem'
export default function Navbar() {

    const pages = [
        {id : 1, name:'', perName : 'داشبورد'},
        {id : 2, name:'factors', perName : 'فاکتورها'},
        {id : 3, name: 'email', perName : 'ایمیل مارکتینگ'},
        {id : 4, name: 'sms', perName : 'اس ام اس مارکتینگ'}
    ]
    return (
        <div className={styles.container}>
            <Profile />
            {pages.map(page => <NavbarItem  pageInfo = {page} key={page.id}/>)}
        </div>
    )
}