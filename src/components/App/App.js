import "./App.css";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Card from "../Card/Card";
import data from "../../data";

const cards = data.map((experience) => {
  return <Card key={experience.id} {...experience} />;
});
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <div className="cards">{cards}</div>
    </div>
  );
}
