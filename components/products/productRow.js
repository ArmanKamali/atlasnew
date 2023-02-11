import { useState } from "react";
import Article from "./article";
import { Esential, Specifications, Photos } from './index'
const ProductRow = ({ product, glasses }) => {
    const [showDetail, setShowDetail] = useState(false)
    return (
        <>
            <Esential showDetail={showDetail} setShowDetail={setShowDetail} product={product} />
            {showDetail ?
                <>
                    <Photos product={product} />
                    <Article content={product.content}/>
                    <Specifications glasses={glasses} product={product} />
                </>
                : null}
        </>
    );
}

export default ProductRow;