import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './navbar.module.css'
import Products from './products';

const Item = ({ data }) => {
    return (
        <div className={styles.itemContainer}>
            <div className="w-100">
                <div className="d-flex flex-row justify-content-between w-90">
                    {data.name === "products" ?
                            <Link href="/product">
                                {data.perName}
                            </Link>
                     
                            :
                        <div>
                            {data.perName}
                        </div>
                    }
                    <Image
                        src="/icons/plus.png"
                        width="11"
                        height="11"
                        alt="plus-sign"
                        className={styles.plusSign}
                    />
                </div>
                {data.childs ?
                    <div className={styles.childWrapper}>
                        {data.name === 'products' ?

                            <Products category={data} /> :
                            data.childs.map(child =>
                                <div className="mt-2" key={child.id} >{child.name}</div>

                            )
                        }
                    </div>
                    : null
                }
            </div>

        </div>
    );
}

export default Item;