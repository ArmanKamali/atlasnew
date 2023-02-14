import { useState } from "react";
import { useSelector } from "react-redux";
import { changeProductCategoryApi } from "../../api/poroductApi";

const Cat = ({ productCat, cats, type, setMainCat, parent, productId, changeValue}) => {
    const categories = useSelector(state => state.reducer.data.categories)
    const token = useSelector(state => state.reducer.user.token)

    const changeMainCat = async (e) => {
        let id = parseInt(e.target.value)
        changeValue(e)
        if (type === 'main') {
            let catResult = categories.filter(category => category.id == id)[0]
            catResult.category_id = id
            setMainCat(catResult)
        } else if (productId) {
            let data = {
                cat_2: id,
                cat_1: parent,
                product_id: productId,
                token
            }
            await changeProductCategoryApi(data)
        }

    }

    return (
        <>
            <select className="form-control" defaultValue={productCat} onChange={(e) => changeMainCat(e)} name={type === 'main' ? "main-cat" : "sub-cat"} >
                {cats.map(category => <option key={category.id} value={category.id}>{category.name}</option>)}
            </select>
        </>
    );
}

export default Cat;