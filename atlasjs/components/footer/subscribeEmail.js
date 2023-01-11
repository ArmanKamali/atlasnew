import styles from './footer.module.css'

const SubscribeEmail = () => {
    return (
        <div className={`d-flex flex-direction-row`}>
            <button className="btn text-warning btn-light">ارسال</button>
            <input className={styles.emailAddress} type="text" placeholder="آدرس ایمیل"/>
        </div>
    );
}

export default SubscribeEmail;