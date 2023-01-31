import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProductsApi } from "../api/poroductApi";

const Products = () => {
    const [products, setProducts] = useState(false);
    const token = useSelector(state => state.reducer.user.token)
    useEffect(() => {
        const getProduct = async () => {
            await getAllProductsApi(token)
        }
        getProduct()

    }, [])

    return (
        <table className="table table-responsive container m-3 p-3 w-100">
            <thead>
                <tr>
                    <th>عکس</th>
                    <th>نام</th>
                    <th>سریال</th>
                    <th>قینت</th>
                    <th>تخفیف</th>
                    <th>درصد تخفیف</th>
                    <th>گروه</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ARMAN</td>
                    <td>ARMAN</td>
                    <td>ARMAN</td>
                    <td>ARMAN</td>

                </tr>
            </tbody>
        </table>
    );
}

export default Products;