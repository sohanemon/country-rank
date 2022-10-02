import axios from "axios";
import { useEffect, useState } from "react";
import Coutries from "./components/coutries";
import MyNavbar from "./components/navbar";
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
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((data) => setState(data.data));
    return () => {};
  }, []);
  const [sortAlgo, setSortAlgo] = useState<"area" | "population">("population");
  return (
    <div className=''>
      <MyNavbar setSortAlgo={setSortAlgo} />
      <div>
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
    </div>
  );
}

export default App;
