import styles from './products.module.css'
import ReactLoading from 'react-loading'
import Image from 'next/image'

const Product = ({ product }) => {

    if (!product)
        return (
            <div className={styles.productWrapper}>
                <div className={styles.loading}>
                <ReactLoading type={'spin'} color={'gray'} width={150} height={150} className="m-9 " />
                </div>

            </div>
    )
    return (
        <div className={styles.productWrapper}>
            <Image src="/1.jpg" width={1000} height={750} alt="product" className={styles.image} />
        </div>
    );
}

export default Product;