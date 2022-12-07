import BgGlass from "./BgGlass";
import styles from './background.module.css'

const Background = () => {
    return (
        <div className={styles.backgroundContainer}>
            <div className={`${styles.thirdBackground} ${styles.backgrounds}`} >
                <div className={styles.goldE} />
            </div>
            <div className={`${styles.secondBackground} ${styles.backgrounds}`}>
                <BgGlass />
            </div>
            <div className={`${styles.firstBackground} ${styles.backgrounds}`}>
                <div className={styles.silverE} />
            </div>
        </div>
    );
}

export default Background;