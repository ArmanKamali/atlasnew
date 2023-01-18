import Link from 'next/link'

const Products = ({ category }) => {
    return (
        <>
            {
                category.childs.map(category =>
                    <div className="mt-2" key={category.id}>
                        <Link href={`/products/${category.engName}`}>
                            {category.name}
                        </Link>
                    </div>
                )
            }
        </>
    );
}

export default Products;