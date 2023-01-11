/*
    HELP
    STATES : 
        factors -> factors that fetched from api by getfactorsummeryapi
        data -> data send to api
        date, date2 -> date that we need for chart
        duration -> month, day , year 
        daily -> if duration is daily
        month -> check wich month we want if duration is daily
        kind -> it checked we want price or count 
        chart -> which chart we want bar , line ,...s


*/

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ReactLoading from 'react-loading'

import BarChartShow from './BarChartShow';

import { getFactorsSummeryApi } from '../../api/factorsApi';
import { findPersianMonth, persianMonth } from '../utils/persianMonth';

import styles from './charts.module.css'

const FactorChart = () => {
    const user = useSelector(state => state.reducer.user.user_data)
    const [factors, setFactors] = useState(false)

    const [data, setData] = useState([false])
    const [date, setDate] = useState('1401-01-01');
    const [date2, setDate2] = useState('1400-01-01');
    const [daily, setDaily] = useState(false)
    const [duration, setDuration] = useState('month')
    const [month, setMonth] = useState(1)
    const [kind, setKind] = useState('price')
    const [chart, setChart] = useState('bar')

    useEffect(() => {
        setFactors(false)
        let getFactorsSummery = async () => {
            let data = { user: { id: user.id, token: user.token }, data: { duration: duration, from: date, from2: date2, kind: kind } }
            console.log(data);
            let result = await getFactorsSummeryApi(data)
            console.log(result.data)
            if (result.status === 200)
                setFactors(result.data)

        }

        getFactorsSummery();
    }, [date, duration, date2, kind])

    useEffect(() => {
        if (factors) {
            setData(factors.map(factor => ({ name: duration === 'month' ? findPersianMonth(factor.id) : factor.id, first: factor.price, second: factor.price2 })))
        }
    }, [factors])


    const changeYear = (e, type) => {
        let year = e.target.value;
        let d = date.split('-')
        type === 1 ? setDate(year + '-' + d[1] + '-' + d[2]) : setDate2(year + '-' + d[1] + '-' + d[2])

    }

    const changeDuration = (e) => {
        if (e.target.value === 'day') {
            setDaily(true)
            return
        }
        // init
        setDaily(false)
        setMonth(1)

        setDuration(e.target.value)
    }

    const changeMonth = (e) => {
        let m = e.target.value
        let d = date.split('-')
        setDate(d[0] + '-' + (m < 10 ? '0' + m : m) + '-' + d[2])
        setDuration('day')
        setMonth(m)
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
                    <select defaultValue={duration} onChange={(e) => changeDuration(e)}>
                        <option value="day">روزانه</option>
                        <option value="month">ماهیانه</option>
                        <option value="year">سالیانه</option>
                    </select>
                    {daily ?
                        <select defaultValue={month} onChange={(e) => { changeMonth(e) }}>
                            {persianMonth.map(m => <option value={m.id} key={m.id}>{m.perName}</option>)}
                        </select>
                        : null
                    }
                </div>
                <div>
                    <select onChange={(e) => changeYear(e, 1)} defaultValue={date.split('-')[0]}>
                        <option>1402</option>
                        <option>1401</option>
                        <option>1400</option>
                        <option>1399</option>
                        <option>1398</option>
                        <option>1397</option>
                        <option>1396</option>
                    </select>
                    {duration === 'month' ?
                        <select onChange={(e) => changeYear(e, 2)} defaultValue={date2.split('-')[0]}>
                            <option>1402</option>
                            <option>1401</option>
                            <option>1400</option>
                            <option>1399</option>
                            <option>1398</option>
                            <option>1397</option>
                            <option>1396</option>
                        </select> : null
                    }
                </div>


                <div>
                    <select onChange={(e) => setKind(e.target.value)} defaultValue={kind}>
                        <option value="price">قیمت</option>
                        <option value="count">تعداد</option>

                    </select>
                </div>
                <div>
                    <select onChange={(e) => setChart(e.target.value)} defaultValue={chart}>
                        <option value="bar">میله ای</option>
                        <option value="line">خطی</option>
                        <option value="bar-2">ترکیبی</option>

                    </select>
                </div>
            </div>

            <BarChartShow data={data} name="first" name2="second" chart={chart} />
        </div>
    );
}

export default FactorChart;