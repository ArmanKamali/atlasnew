import Image from 'next/image';
import styles from './footer.module.css'
import { SubscribeEmail, AddIcon } from './index';

const Footer = () => {
    const icons = [
        { id: 1, icon: 'shipped', text: 'ضمانت سالم رسیدن محصول', },
        { id: 2, icon: 'money', text: 'پرداخت در محل (کرج و تهران)' },
        { id: 3, icon: 'return', text: '6 ماه ضمانت شکست' },
        { id: 4, icon: 'award', text: 'ضمانت اصالت کالا' },
    ]
    return (
        <div className={styles.wrapper}>
            <div className="d-flex justify-content-between flex-column">
                <div className={styles.borderTopDown}>ارتباط از طریق ایمیل</div>
                <div className={styles.borderTopDown}>
                    <SubscribeEmail />
                </div>
            </div>

            <div className={`${styles.borderTopDown} d-flex flex-row`}>
                {icons.map(icon => <AddIcon key={icon.id} data={icon} />)}
            </div>

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

export default Footer;