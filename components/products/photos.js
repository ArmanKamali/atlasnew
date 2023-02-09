import Image from 'next/image'
import styles from './products.module.css'
import { BsFileMinusFill, BsFillCheckCircleFill, BsPlusLg } from "react-icons/bs";
import { changeProductPhotoApi, removeProductPhotoApi } from '../../api/poroductApi';
import { useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
const Photos = ({ product }) => {
    const token = useSelector(state => state.reducer.user.token)
    const inputFile = useRef(null)
    const [mainPhoto, setMainPhoto] = useState(product.photo)
    const [subPhotos, setSubPhotos] = useState(product.product_sub_photos)
    const [id, setId] = useState(false)
    useEffect(() => {
        // console.log(id)
        console.log(subPhotos)
    }, [id, subPhotos])
    const uploadFile = async (e) => {
        setId(e.target.getAttribute('data-name') === 'main' ? 0 : e.target.getAttribute('data-id'))
        inputFile.current.click();

    }

    const changePhoto = async (e) => {

        let file = e.target.files[0];
        let form = new FormData();
        form.append('file', file);
        form.append('id', id);
        form.append('product_id', product.id)
        let photo = await changeProductPhotoApi(form, token)
        if (id === 0)
            setMainPhoto(photo)
        else if (id !== 'new') {
            let choosenPhoto = photo
            let otherPhotos = subPhotos.filter(item => item.id != id)
            setSubPhotos([...otherPhotos, choosenPhoto])
        } else if (id === 'new') {
            setSubPhotos([...subPhotos, photo])
        }

    }

    const removePhoto = async (e) => {
        console.log()
        let data = {
            id: e.currentTarget.getAttribute('data-id'),
            token
        }

        let id = await removeProductPhotoApi(data)
        setSubPhotos(subPhotos.filter(item => item.id != id))
    }

    const [hidden, setHidden] = useState('d-none')
    return (
        <div className="bg-light p-3 m-3">
            <div className="text-center text-bold" onClick={() => setHidden(hidden === 'd-none' ? '' : 'd-none')}>
                عکس های محصول
            </div>
            <div className={hidden}>
                <div className="d-none">
                    <form>
                        <input type='file' ref={inputFile} onChange={(e) => changePhoto(e)} />
                    </form>
                </div>
                <div>
                    {product.product_sub_photos ?
                        <>
                            {/* عکس اصلی  */}
                            <div className="d-flex flex-row justify-content-around flex-wrap">
                                <div className={styles.photo}>
                                    <BsFillCheckCircleFill color="green" />
                                    <Image
                                        width={350}
                                        height={350}
                                        src={`https://www.atlasbentglass.com/product-photo/${mainPhoto}`}
                                        alt={product.name}
                                        onClick={(e) => uploadFile(e)}
                                        data-name="main" />

                                </div>
                                {
                                    // عکس های فرعی
                                    subPhotos.map(photo =>
                                        <div className={styles.photo} key={photo.id}>
                                            <div className={styles.addPhoto} onClick={(e) => removePhoto(e)} data-id={photo.id}>
                                                <BsFileMinusFill color='red' />
                                            </div>

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
                                <div className={styles.addPhoto} data-id="new" onClick={(e) => uploadFile(e)}>
                                    <BsPlusLg color='red' />
                                </div>
                            </div>
                        </> : null
                    }
                </div>
            </div>
        </div>
    );
}

export default Photos;