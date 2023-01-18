import { useEffect } from "react";
import { Particle } from "../utils/particle";
import Product from "./product";
import styles from './products.module.css'

const ProductsComponent = ({ category }) => {
    return (
        <div className={styles.container}>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}

export default ProductsComponent;