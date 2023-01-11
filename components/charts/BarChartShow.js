import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';


const BarChartShow = ({ data, name, name2, chart }) => {
    console.log(chart)
    switch (chart) {
        case 'bar':
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
                    <Bar dataKey={name2} barSize={30} fill="#80D8CF" />
                </BarChart>
            );
        case 'line':
            return (
                <LineChart
                    width={700}
                    height={400}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 6" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={name} stroke="#536976" />
                    <Line type="monotone" dataKey={name2} stroke="#80D8CF" />
                </LineChart>
            )
        case 'area':
            return (
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    stackOffset="expand"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 6" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey={name} stackId="1" stroke="#536976" fill="#536976" />
                    <Area type="monotone" dataKey={name2} stackId="1" stroke="#80D8CF" fill="#80D8CF" />

                </AreaChart>
            )
            case 'bar-2':
                case 'bar':
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
        
                        >
                            <CartesianGrid strokeDasharray="3 6" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
        
                            <Bar dataKey={name} barSize={30}  stackId="a" fill="#536976" />
                            <Bar dataKey={name2} barSize={30} stackId="a"  fill="#80D8CF" />
                        </BarChart>
                    );

    }

}

export default BarChartShow;