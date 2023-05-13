import { useLoaderData } from "react-router-dom";
import CoffeeCard from "./components/CoffeeCard";

function App() {
  const allCoffee = useLoaderData();

  return (
    <div className="m-20">
      <h1 className="text-5xl text-center">
        WOW COFFEE ! BUT I LOVE TEA: {allCoffee.length}
      </h1>

      <div className="grid md:grid-cols-2">
        {allCoffee.map((coffee) => (
          <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
        ))}
      </div>
    </div>
  );
}

export default App;
