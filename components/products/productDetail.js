import { useSelector } from "react-redux";
import { AddProductDetailApi, changeProductDetailApi, deleteProductDetailApi } from "../../api/poroductApi";
import numeral from "numeral";
import { useState } from "react";
import { ImMinus } from "react-icons/im";
import { useRouter } from 'next/router'

const ProductDetail = ({ data, productId, glasses }) => {
    const token = useSelector(state => state.reducer.user.token)
    const [sale, setSale] = useState(data.d_saledarsad / 100 * data.d_price)
    const [price, setPrice] = useState(data.d_price)
    const [newDetailId, setNewDetailId] = useState(false)
    const router = useRouter()

    const changeElement = async (e) => {
        let info = {
            value: e.target.value,
            id: data.id,
            productId,
            name: e.target.getAttribute('data-name'),
            token: token
        }

        if (e.target.getAttribute('data-name') === 'd_saledarsad')
            setSale(e.target.value / 100 * data.d_price)

        if (e.target.getAttribute('data-name') === 'd_price')
            setPrice(e.target.value)
            
        await changeProductDetailApi(info);
    }

    const deleteElement = async () => {
        let info = {
            id: data.id,
            token
        }

        await deleteProductDetailApi(info);
        router.reload(window.location.pathname)

    }


    return (
        <tr>
            <td>
                <input type="number" min="0" defaultValue={data.length} className="form-control" onChange={(e) => changeElement(e)} data-name="length" />
            </td>
            <td>
                <input type="number" min="0" defaultValue={data.width} className="form-control" onChange={(e) => changeElement(e)} data-name="width" />
            </td>
            <td>
                <input type="number" min="0" defaultValue={data.height} className="form-control" onChange={(e) => changeElement(e)} data-name="height" />
            </td>
            <td>
                <input type="number" min="0" defaultValue={data.glass_thickness} className="form-control" onChange={(e) => changeElement(e)} data-name="glass_thickness" />
            </td>
            <td>
                <select className="form-control" defaultValue={glasses.filter(glass => data.glass.id === glass.id)[0].id} data-name="glass_id" onChange={(e) => changeElement(e)}>
                    {glasses.map(glass => <option value={glass.id} key={glass.id}>{glass.name}</option>)}
                </select>
            </td>
            <td>
                <input type="number" min="0" defaultValue={data.d_price} className="form-control" onChange={(e) => changeElement(e)} data-name="d_price" />
                <div className="text-start text-muted">
                    {numeral(price).format("0,0")}
                </div>
            </td>
            <td>
                {numeral(sale).format("0,0")}</td>
            <td>
                <input type="number" min="0" defaultValue={data.d_saledarsad} className="form-control" onChange={(e) => changeElement(e)} data-name="d_saledarsad" />
            </td>
            <td>
                <input type="number" min="0" defaultValue={data.d_sendtime} className="form-control" onChange={(e) => changeElement(e)} data-name="d_sendtime" />
            </td>
            <td>
                <ImMinus color="red" onClick={deleteElement} />
            </td>
        </tr>
    );
}

export default ProductDetail;