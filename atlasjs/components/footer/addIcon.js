import Image from "next/image";

const AddIcon = ({ data }) => {
    return (
        <div className="d-flex flex-column">
            <Image src={`/icons/${data.icon}.png`} width="50" height="50" alt={data.icon}/>
            <div>{data.text}</div>

        </div>
    );
}

export default AddIcon;