import Image from "next/image";
import styles from './navbar.module.css'

const Search = ({ showSearch, setShowSearch }) => {
    return (
       <div className={styles.searchWrapper}>
            <input className={styles.searchInput} placeholder="جستجو"/>
       </div>

    );
}

export default Search;