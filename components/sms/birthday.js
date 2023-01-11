import { useEffect, useState } from "react";
import ReactLoading from 'react-loading'
import { useSelector } from "react-redux";


import { getBirthdayDataApi } from "../../api/smsApi";

const BirthdaySms = () => {
    const [data, setData] = useState(false)
    const user = useSelector(state => state.reducer.user.user_data)

    useEffect(() => {
        const getBirthdayData = async () => {
            let input = { user: { id: user.id, token: user.token } }
            let result = await getBirthdayDataApi(input);
            console.log(result)
        }

        getBirthdayData();
    }, [])


    if (!data)
        return (
            <ReactLoading type={'spin'} color={'gray'} width={150} height={150} className="m-9 align-self-center" />
        )

    return (

        <div>
            <div>
                {/* {data.sms_message.text} */}
            </div>
        </div>
    );
}

export default BirthdaySms;

