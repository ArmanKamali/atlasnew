import Image from 'next/image'
import styles from './products.module.css'
import { BsFillCheckCircleFill, BsPlusLg } from "react-icons/bs";
import { changeProductPhotoApi } from '../../api/poroductApi';
import { useSelector } from 'react-redux';
import { useRef, useState } from 'react';
const Photos = ({ product }) => {
    const token = useSelector(state => state.reducer.user.token)
    const inputFile = useRef(null) 
    const [id,setId] = useState(false)
    const uploadFile = async (e) => {
        setId(e.target.getAttribute('data-name') === 'main' ? 0 : e.target.getAttribute('data-id'))
        inputFile.current.click();

    }

    const changePhoto = async (e) =>{
        let file = e.target.files[0];
        let form =new FormData();
        form.append('file',file);
        form.append('id',id);

        await changeProductPhotoApi(form,token)
    }

    return (
        <>
            <input type='file' ref={inputFile} className="d-none" onChange={(e)=>changePhoto(e)}/>
            <tr>

                <td colSpan="9">
                    {product.product_sub_photos ?
                        <>
                            <div className="d-flex flex-row justify-content-around flex-wrap">
                                <div className={styles.photo}>
                                    <BsFillCheckCircleFill color="green" />
                                    <Image
                                        width={350}
                                        height={350}
                                        src={`https://www.atlasbentglass.com/product-photo/${product.photo}`}
                                        alt={product.name}
                                        onClick={(e) => uploadFile(e)}
                                        data-name="main" />

                                </div>
                                {
                                    product.product_sub_photos.map(photo =>
                                        <div className={styles.photo} key={photo.id}>
                                            <Image src={`https://www.atlasbentglass.com/product-subphotos/${photo.photo}`}
                                                width={350}
                                                height={350}
                                                alt={product.name}
                                                onClick={(e) => uploadFile(e)}

                                                data-id={photo.id}
                                            />
                                        </div>
                                    )
                                }
                                <div className={styles.addPhoto}>
                                    <BsPlusLg color='red' />
                                </div>
                            </div>
                        </> : null
                    }
                </td>
            </tr>
        </>
    );
}

export default Photos;