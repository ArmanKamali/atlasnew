import { useEffect, useState } from "react";
import { getProductsApi } from "../../api/product";
import { Particle } from "../utils/particle";
import Product from "./product";
import styles from './products.module.css'

const ProductsComponent = ({ category }) => {
    const [products, setProducts] = useState(false);

    useEffect(() => {
        setProducts(false)
        console.log(category)
        const getProducts = async () => {
            setProducts(await getProductsApi(category ? category.id : 0))
        }
        getProducts();
    }, [category])

    useEffect(() => {
        console.log(products);
    }, [products])

    if (!products)
        return (
            <div className={styles.container}>
                <Product /><Product /><Product /><Product /><Product /><Product />
            </div>
        )

    return (
        <div className={styles.container}>
            {products.map(product => <Product key={product.id} product={product} />)}
        </div>
    );
}

export default ProductsComponent;