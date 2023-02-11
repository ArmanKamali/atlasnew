import styles from './products.module.css'
import ReactLoading from 'react-loading'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const Product = ({ product }) => {
    let photoPath = useSelector(state => state.reducer.consts.photoPath)
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
            <Image src={`${photoPath}/${product.photo}`} width={750} height={750} alt={product.name} className={styles.image} />
            <div className={styles.productDetailContainer}>
                <div className={styles.productDetailName}>
                    {product.name}
                </div>
          
            </div>
        </div>
    );
}

export default Product;