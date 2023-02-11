import { useEffect, useState } from "react";
import QuillEditor from "./quillEditor";





const Article = ({content}) => {
    const [text, setText] = useState(content);
    const [hidden, setHidden] = useState('d-none')
    console.log(content)
    useEffect(()=>{
        console.log(text)
    },[text])
    return (
        <div className="bg-light p-3 m-3">
            <div className="text-center text-bold" onClick={() => setHidden(hidden === 'd-none' ? '' : 'd-none')}>
                مقاله راجع به محصول
            </div>
            <div className={`${hidden} mt-3 bg-white`} >
               <QuillEditor content={text} setContent={setText}/>
            </div>
        </div>
    );
}

export default Article;