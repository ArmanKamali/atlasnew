import { changeProductElememtApi } from "../../api/poroductApi";
import Image from 'next/image'
import { useSelector } from "react-redux";
const Esential = ({ setShowDetail, showDetail, product }) => {
    const token = useSelector(state => state.reducer.user.token)

    const changeElement = async (e) => {
        let data = {
            value: e.target.value,
            id: product.id,
            name: e.target.getAttribute('data-name'),
            token: token
        }

        await changeProductElememtApi(data);
    }



    return (
        <table className="table table-striped  table-hover  p-5">
            <thead>
                <tr>
                    <th>عکس</th>
                    <th>نام</th>
                    <th>سریال</th>
                    <th>گروه اصلی </th>
                    <th>گروه فرعی </th>
                </tr>
            </thead>
            <tbody>
                <tr onClick={() => setShowDetail(!showDetail)}>
                    <td>
                        <Image width={150} height={150} src={`https://www.atlasbentglass.com/product-photo/${product.photo}`} alt={product.name} />

                    </td>
                    <td data-name="name">
                        <input type="text" defaultValue={product.name} className="form-control" onChange={(e) => changeElement(e)} data-name="name" /></td>
                    <td>
                        <input type="text" defaultValue={product.serial} className="form-control" onChange={(e) => changeElement(e)} data-name="serial" />
                    </td>

                    <td>
                        {product.categories.filter(category => category.type === 1)[0].name}
                    </td>
                    <td>
                        {product.categories.filter(category => category.type === 2)[0].name}
                    </td>
                </tr>
            </tbody>
        </table>

    );
}

export default Esential;