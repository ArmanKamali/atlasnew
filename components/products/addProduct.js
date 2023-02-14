
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { addProductApi } from "../../api/poroductApi";
import Cat from "./cat";

const AddProduct = ({ setAddProductFlag }) => {
    const token = useSelector(state => state.reducer.user.token)
    const categories = useSelector(state => state.reducer.data.categories)
    const [mainCat, setMainCat] = useState(categories.filter(category => category.id == 1)[0])
    const [subCat, setSubCat] = useState(categories.filter(category => category.marboot == 1)[0])
    const [formData, setFormData] = useState([])
    const mainCats = categories.filter(category => category.type === 1)
    const [subCats, setSubCats] = useState(categories.filter(category => category.marboot == 1))
    const [image, setImage] = useState(false)
    useEffect(() => {
        setSubCats(categories.filter(category => category.marboot == (mainCat.category_id ? mainCat.category_id : 1)))
    }, [mainCat])

    useEffect(() => {
    }, [subCats, formData])

    const formSubmit = async (event) => {
        event.preventDefault();
        if (formData.length !== 4 || !image)
            return

        let form = new FormData();
        form.append('image', image);

        formData.map(row => form.append(row.name, row.value))
        

        await addProductApi(form, token)
    }

    const uploadFile = (e) => {
        let file = e.target.files[0];
        setImage(file)
    }


    const changeValue = (e) => {
        let inputVal = {
            'name': e.target.getAttribute('name'),
            'value': e.target.value
        }
        let prevInput = formData.filter(row => row.name !== e.target.getAttribute('name'));
        setFormData([...prevInput, inputVal])
    }
    return (
        <form onSubmit={(e) => formSubmit(e)}>
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
                    <tr >
                        <td>
                            <input type="file" name="photo" onChange={(e) => { uploadFile(e) }} />
                        </td>
                        <td data-name="name">
                            <input type="text" className="form-control" name="name" onChange={(e) => changeValue(e)} />
                        </td>
                        <td>
                            <input type="text" className="form-control" name="serial" onChange={(e) => changeValue(e)} />
                        </td>

                        <td>
                            <Cat productCat={mainCat.category_id} setMainCat={setMainCat} type="main" cats={mainCats} changeValue={changeValue} />
                        </td>
                        <td>
                            <Cat productCat={subCat.category_id} type="sub" cats={subCats} parent={mainCat.category_id} changeValue={changeValue} />
                        </td>
                        <td>
                            <button className="btn btn-success" type="submit">ثبت</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>

    );
}

export default AddProduct;