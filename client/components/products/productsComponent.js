import { useEffect, useState } from "react";
import { getProductsApi } from "../../api/product";
import { Particle } from "../utils/particle";
import Product from "./product";
import styles from './products.module.css'

const ProductsComponent = ({ category }) => {
    const [products, setProducts] = useState(false);

    useEffect(() => {
        const getProducts = async () => {
            setProducts(await getProductsApi(category ? category.id : 0))
        }
        getProducts();
    }, [])

    useEffect(()=>{
        console.log(products);
    },[products])

    if (!products)
        return (
            <div className={styles.container}>
                <Product /><Product /><Product /><Product /><Product /><Product />
            </div>
        )

    return (
        <div className={styles.container}>
            <Product />
            <Product />
            <Product />
        </div>
    );
}

export default ProductsComponent;