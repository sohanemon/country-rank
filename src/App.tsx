import axios from "axios";
import { useEffect, useState } from "react";
import Coutries from "./components/coutries";
import { Routes, Route } from "react-router-dom";
import MyNavbar from "./components/navbar";
import RechartGraph from "./components/rechart-graph";
function App(): JSX.Element {
  const [state, setState] = useState<
    Array<{
      population: number;
      ccn3: string;
      area: number;
      name: { common: string };
    }>
  >([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((data) =>
      setState(
        data.data.map((el: any) => {
          return {
            ...el,
            area: parseFloat((el.area / 1000).toFixed(2)),
            population: parseFloat((el.population / 1000000).toFixed(2)),
          };
        })
      )
    );

    return () => {};
  }, []);

  const change = () => {
    setState((p) =>
      p.map((el) => {
        return { ...el, area: el.area / 1000 };
      })
    );
    console.log(state);
  };

  const [sortAlgo, setSortAlgo] = useState<"area" | "population">("population");
  return (
    <div className=''>
      <MyNavbar setSortAlgo={setSortAlgo} />
      <Routes>
        <Route
          path='/'
          element={
            <div className='flex flex-col  '>
              {state
                .sort((a, b) =>
                  sortAlgo === "population"
                    ? b.population - a.population
                    : b.area - a.area
                )
                .slice(0, 10)
                .map((el) => (
                  <Coutries key={el.ccn3} {...el} />
                ))}
            </div>
          }
        />
        <Route path='graph' element={<RechartGraph state={state} />} />
      </Routes>
    </div>
  );
}

export default App;
