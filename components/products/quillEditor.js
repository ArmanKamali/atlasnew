import dynamic from 'next/dynamic'

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
})

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }] // this is rtl support
    ],


    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote', 'align', 'direction',
    'list', 'bullet', 'indent',
    'link', 'image'
]



const QuillEditor = ({content, setContent}) => {
    return (
        <QuillNoSSRWrapper modules={modules} formats={formats} theme="snow" value={content} onChange={setContent} />
    );
}

export default QuillEditor;