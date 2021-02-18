const { useState, useEffect } = React;

// function getPhotoFromId(photoId) {
//   return `"https://images.dog.ceo/breeds/labrador/n02099712_1987.jpg"`;
// }

function App() {
  // Your Code Here
  const [dog, setDog] = useState([]);
  // const [adopted, adoptDog] = useState([]); - an array for adopted dogs to go into

  //componentDidMount
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog(data.message));
  }, []);

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
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
