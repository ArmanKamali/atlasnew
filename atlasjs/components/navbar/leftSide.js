import Image from "next/image";
import styles from './navbar.module.css'

const LeftSide = () => {
    return (
        <div className="d-flex flex-row ms-5 ps-3">
            <div className="ps-2 pe-2">
                <Image src="/icons/user.png" width={25} height={25} alt="user-icon" />
            </div>
            <div className="ps-2 pe-2">
                <Image src="/icons/shoppingcart.png" width={25} height={25} alt="user-icon" />
                <div className={styles.shoppingNumber}>0</div>
            </div>
        </div>
    );
}

export default LeftSide;