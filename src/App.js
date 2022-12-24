// import Contact from "./Contact";
import Jokes from "./practice/Jokes";
import Card from "./project/Card";
import Hero from "./project/Hero";
import Navbar from "./project/Navbar";
import jokesData from "./practice/jokesData";
import data from "./data";

function App() {
  const jokeElements = jokesData.map((j) => (
    <Jokes setup={j.setup} punchline={j.punchline} />
  ));

  const cardElements = data.map((item) => <Card key={item.id} {...item} />);

  return (
    <div className="App">
      {/* {jokeElements} */}

      <Navbar />
      <Hero />
      <section className="card-list">{cardElements}</section>
    </div>
  );
}

export default App;
