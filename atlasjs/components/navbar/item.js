import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './navbar.module.css'

const Item = ({ data }) => {
    return (
        <div className={styles.itemContainer}>
            <div className="w-100">
                <div className="d-flex flex-row justify-content-between w-90">
                    <div>
                        {data.perName}
                    </div>
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
                        {data.childs.map(child => <div key={child.id} >{child.text}</div>)}
                    </div>
                    : null
                }
            </div>

        </div>
    );
}

export default Item;