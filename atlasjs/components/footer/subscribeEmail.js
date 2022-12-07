import styles from './footer.module.css'

const SubscribeEmail = () => {
    return (
        <div className={`d-flex flex-direction-row`}>
            <div>ارسال</div>
            <input type="text" placeholder="آدرس ایمیل"/>
        </div>
    );
}

export default SubscribeEmail;