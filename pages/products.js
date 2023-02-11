import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProductsApi, getGlasses } from "../api/poroductApi";
import ProductRow from "../components/products/productRow";
import ReactLoading from 'react-loading'

const Products = () => {
    const [products, setProducts] = useState(false);
    const [glasses, setGlasses] = useState(false)
    const token = useSelector(state => state.reducer.user.token)
    useEffect(() => {
        const getProduct = async () => {
            setProducts(await getAllProductsApi(token))
            setGlasses(await getGlasses(token))

        }
        getProduct()
    }, [])
    if (!glasses || !products)
        return (
            <div>
                <ReactLoading type={'spin'} color={'gray'} width={150} height={150} className="m-9 align-self-center" />
            </div>
        )

    return (
        <div>
            {products ?
                products.map(product => <ProductRow key={product.id} product={product} glasses={glasses} />) : null
            }
           
        </div>
    );
}

export default Products;