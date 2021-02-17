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
      .then((object) => object.json())
      .then((hydrated) => console.log(hydrated))
      .then((hydrated) => setDog(hydrated));
  }, []);

  //left arrow key function
  // const leftToSkip = (e) => {
  //   //get rid of current dog photo when left arrow is pushed and move on to next dog
  //   dog.picture += `${e.code}`;
  //   if (e.code === "ArrowLeft") {
  //     dog.pop(dog.picture);
  //   }
  // };

  //right arrow key function
  // const rightToAdopt = (e) => {
  //   //move current dog photo to adopted zone when right arrow is pushed and put a new one on screen
  //   dog.picture += `${e.code}`;
  //   if (e.code === "ArrowRight") {
  //     adopted.push(dog.picture);
  //   }
  // };

  //componentDidUpdate
  // useEffect(() => {
  //   window.addEventListener("keydown", leftToSkip);
  //   window.addEventListener("keydown", rightToAdopt);
  // });

  //componentWillUnmount
  // useEffect(() => {
  //   return (
  //     window.removeEventListener("keydown", leftToSkip),
  //     window.removeEventListener("keydown", rightToAdopt)
  //   );
  // });

  return (
    <div className="app">
      <h1>Doggie Speed Dating</h1>
      <h3>
        Press the arrow keys on your keyboard. Left to skip, Right to Adopt.
      </h3>
      <div>
        <img url={dog.object.message} />
      </div>
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
