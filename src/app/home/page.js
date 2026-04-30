import Craving from "../components/Craving";
import FamousDishes from "../components/Famousdishes";
import Mediumlarge from "../components/Mediumlagre";
import PizzaSection from "../components/Pizzasection";
import RestaurantSection from "../components/Restaurantsection";



export default function Home() {
  return (
    <>
      <Mediumlarge/>
      <PizzaSection/>
      <RestaurantSection/>
      <FamousDishes/>
      <Craving/>
  
    </>
  );
}
