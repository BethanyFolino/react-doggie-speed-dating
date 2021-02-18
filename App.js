const { useState, useEffect } = React;

function App() {
  // Your Code Here
  const [dog, setDog] = useState([]);
  const [adopted, adoptDog] = useState([]); //an array for adopted dogs to go into

  //componentDidMount
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog(data.message));
  }, []);

  const arrowKeys = (e) => {
    if (e.code === "ArrowLeft") {
      //move on to next dog
      setDog(); //makes picture go away, but then it is stuck until refreshed
    } else if (e.code === "ArrowRight") {
      //put current dog picture in adopted array, then get new dog picture
      adoptDog(adopted);
      setDog();
    }
  };

  //componentDidUpdate
  useEffect(() => {
    window.addEventListener("keydown", arrowKeys);
  });

  //componentWillUnmount
  useEffect(() => {
    return () => {
      window.removeEventListener("keydown", arrowKeys);
    };
  });

  return (
    <div className="app">
      <h1>Doggie Speed Dating</h1>
      <h3>
        Press the arrow keys on your keyboard. Left to skip, Right to Adopt.
      </h3>
      <section>
        Current Dog
        <img src={dog} />
      </section>
      <section>
        Adopted Dogs
        <div>{adopted}</div>
      </section>
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
