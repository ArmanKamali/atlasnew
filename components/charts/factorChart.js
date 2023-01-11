import ReactLoading from 'react-loading'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFactorsSummeryApi } from '../../api/factorsApi';
import { findPersianMonth } from '../utils/persianMonth';
import BarChartShow from './BarChartShow';
import styles from './charts.module.css'

const FactorChart = () => {
    const user = useSelector(state => state.reducer.user.user_data)
    const [factors, setFactors] = useState(false)
    const [data, setData] = useState([false])
    const [date, setDate] = useState('1401-01-01');
    const [duration,setDuration] = useState('month')
    useEffect(() => {
        setFactors(false)
        let getFactorsSummery = async () => {
            let data = { user: { id: user.id, token: user.token }, data: { duration: duration, from: date } }
            let result = await getFactorsSummeryApi(data)
            if (result.status === 200)
                setFactors(result.data.filter(item => item.price > 0))

        }

        getFactorsSummery();
    }, [date, duration])

    useEffect(() => {
            if (factors) {            
            setData(factors.map(factor => ({name: findPersianMonth(factor.id), price: factor.price})))
        }
    }, [factors])


    const changeYear = (e)=>{
        let year = e.target.value;
        let d = date.split('-')
        setDate(year + '-' + d[1]  + '-' + d[0])

    }

    const changeDuration = (e) =>{
        // setDuration(e.target.value)
    }

    if (!factors)
        return (
            <div className={styles.factorWrapper} >
                <ReactLoading type={'spin'} color={'gray'} width={150} height={150} className="m-9 align-self-center" />
            </div>
        )

    return (
        <div className={styles.factorWrapper}>
            <div className="d-flex flex-direction-row justify-content-around col-12" >
            <div className="d-flex flex-direction-row">
                <div>نوع:</div>
                    <select defaultValue={duration} onChange={(e)=>changeDuration(e)}> 
                        <option value="day">روزانه</option>
                        <option value="month">ماهیانه</option>
                        <option value="year">سالیانه</option>
                    </select>
                </div>
                <div>
                    <select onChange={(e) => changeYear(e)} defaultValue={date.split('-')[0]}>
                        <option>1401</option>
                        <option>1400</option>
                        <option>1399</option>
                        <option>1398</option>
                        <option>1397</option>
                        <option>1396</option>
                    </select>
                </div>
                
                
                <div></div>
            </div>
            <BarChartShow data={data} name="price"/>
        </div>
    );
}

export default FactorChart;