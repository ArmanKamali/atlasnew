import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const BarChartShow = ({data, name}) => {
    return (
        <BarChart
            width={700}
            height={400}
            data={data}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5
            }}
            title='مبلغ به هزار تومان'

        >
            <CartesianGrid strokeDasharray="3 6" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={name} barSize={30} fill="#536976" />
        </BarChart>
    );
}

export default BarChartShow;