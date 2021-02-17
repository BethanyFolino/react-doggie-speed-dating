const { useState, useEffect } = React;

function App() {
  // Your Code Here
  const [dog, setDog] = useState({});

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((object) => object.json())
      .then((hydrated) => setDog(hydrated));
  });

  return (
    <div className="app">
      <h1>Doggie Speed Dating</h1>
      <h3>
        Press the arrow keys on your keyboard. Left to skip, Right to Adopt.
      </h3>
      <section>{dog}</section>
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
