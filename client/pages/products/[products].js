import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import ProductsComponent from '../../components/products/productsComponent'
import styles from '../../styles/Home.module.css'
import { Particle } from '../../components/utils/particle'

const Products = () => {
    const url = window.location.pathname.split('/')
    const {asPath} = useRouter()

    const categories = useSelector(state => state.reducer.products.category)
    const [category, setCategory] = useState(false)
    useEffect(() => {
        setCategory(categories.filter(category => category.engName === url[2])[0])
    }, [categories, asPath])



    return (
        <div className={styles.container}>
            <div className={styles.particles}>
                <Particle />
            </div>

            <ProductsComponent category={category} />
        </div>
    );
}

export default Products;