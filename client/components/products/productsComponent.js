import { useEffect, useState } from "react";
import { getProductsApi } from "../../api/product";
import { Particle } from "../utils/particle";
import Product from "./product";
import styles from './products.module.css'

const ProductsComponent = ({ category }) => {
    const [products, setProducts] = useState(false);

    useEffect(() => {
        setProducts(false)
        const getProducts = async () => {
            if (category === 'all') {
                setProducts(await getProductsApi(category))
            }
            else
                setProducts(await getProductsApi(category.id))
        }
        getProducts();
    }, [category])

    if (!products)
        return (
            <div className={styles.container}>
                <Product /><Product /><Product /><Product /><Product /><Product />
            </div>
        )

    return (
        <div className={styles.container}>
            {products.map(product => <Product key={product.id} product={product} />)}
            {products.length % 3 === 2 ? <Product /> : null}
            {products.length % 3 === 1 ? <><Product /><Product /></> : null}
        </div>
    );
}

export default ProductsComponent;