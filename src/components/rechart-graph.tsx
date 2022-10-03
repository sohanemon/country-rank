interface Props {
  state: Array<{
    population: number;
    ccn3: string;
    area: number;
    name: { common: string };
  }>;
}

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
const RechartGraph: React.FC<Props> = ({ state }) => {
  return (
    <div>
      <h1 className='text-3xl font-semibold text-center my-10'>
        Country Rank By Area
      </h1>
      <LineChart
        style={{ margin: "0 auto" }}
        width={600}
        height={500}
        data={state.sort((a, b) => b.area - a.area).slice(0, 10)}
      >
        <Line type={"monotone"} dataKey='area' unit={" km"} />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <Tooltip />
        <XAxis dataKey='name.common' tick={false} />
        <YAxis dataKey='area' unit={" km"} />
      </LineChart>
      <h1 className='text-3xl font-semibold text-center my-10'>
        Country Rank By Population
      </h1>
      <LineChart
        style={{ margin: "0 auto" }}
        width={600}
        height={500}
        data={state.sort((a, b) => b.population - a.population).slice(0, 10)}
      >
        <Line type={"monotone"} dataKey='population' unit={" Million"} />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <Tooltip />
        <XAxis dataKey='name.common' tick={false} />
        <YAxis dataKey='population' unit={" Million"} />
      </LineChart>
      <h1 className='text-3xl font-semibold text-center my-10'>
        Country Rank By Area & Population
      </h1>
      <LineChart
        style={{ margin: "0 auto" }}
        width={600}
        height={500}
        data={state.sort((a, b) => b.population - a.population).slice(0, 10)}
      >
        {" "}
        <Line type={"monotone"} dataKey='area' stroke='green' unit={" km"} />
        <Line
          type={"monotone"}
          dataKey='population'
          stroke='red'
          unit={" Million"}
        />
        <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
        <Tooltip />
        <XAxis dataKey='name.common' tick={false} />
        <YAxis dataKey='population' unit={" Million"} />
      </LineChart>
    </div>
  );
};

export default RechartGraph;
