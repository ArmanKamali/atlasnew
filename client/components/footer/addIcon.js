import Image from "next/image";

const AddIcon = ({ data }) => {
    return (
        <div className="d-flex flex-column">
            <div className="text-center">
                <Image src={`/icons/${data.icon}.png`} width="50" height="50" alt={data.icon} />
            </div>
            <div className="mt-3 fw-bold">{data.text}</div>

        </div>
    );
}

export default AddIcon;