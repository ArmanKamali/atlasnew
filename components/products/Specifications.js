import { useRouter } from "next/router";
import { AddProductDetailApi } from "../../api/poroductApi"
import { useSelector } from "react-redux";
import { useState } from "react";
import ProductDetail from "./productDetail";
import { ImPlus } from "react-icons/im";



const Specifications = ({ glasses, product }) => {
    const token = useSelector(state => state.reducer.user.token)
    const [newRowNumber, setNewRowNumber] = useState(1);
    const router = useRouter()

    const addElement = async (e) => {
        let info = {
            productId: product.id,
            token,
            number: newRowNumber,
        }
        await AddProductDetailApi(info)
        router.reload(window.location.pathname)


    }

    const [hidden, setHidden] = useState('d-none')

    return (
        <div>
            <div className="text-center text-bold bg-light p-3 m-3" onClick={() => setHidden(hidden === 'd-none' ? '' : 'd-none')}>
                اطلاعات جانبی
            </div>
            <div className={`table-responsive ${hidden}`} >
                <table className="table  table-striped  table-hover  p-5 w-100">
                    <thead>
                        <tr>
                            <th>طول</th>
                            <th>عرض</th>
                            <th>ارتفاع</th>
                            <th>ضخامت</th>
                            <th>نوع شیشه</th>
                            <th>قیمت(تومان)</th>
                            <th>تخفیف(تومان)</th>
                            <th>درصد تخفیف(تومان)</th>
                            <th>زمان ارسال</th>
                            <th>حذف</th>
                        </tr>
                    </thead>
                    <tbody>
                        {product.details.map(detail => <ProductDetail key={detail.id} data={detail} productId={product.id} glasses={glasses} />)}
                        <tr>
                            <td colSpan={3} className="text-start">
                                اطلاعات جدید:
                            </td>
                            <td colSpan={3} className="text-end">
                                <input type="number" min="0" max="6" defaultValue="1" onChange={(e) => setNewRowNumber(e.target.value)} />

                            </td>
                            <td colSpan={3} className="text-center">
                                <ImPlus color="green" onClick={addElement} />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Specifications;