import BirthdaySms from '../components/sms/birthday';
import styles from '../styles/containers.module.css'

const SMS = () => {
    return (
        <>
            <div className={styles.smsContainer}>
                <BirthdaySms/>
            </div>
        </>
    );
}

export default SMS;