const { useState, useEffect } = React;

function App() {
  // Your Code Here
  const [dog, setDog] = useState([]);
  const [adopted, adoptDog] = useState([]); //an array for adopted dogs to go into
  const [timeRemaining, setTimeRemaining] = useState(5);

  //componentDidMount
  useEffect(() => {
    getNewDog();
  }, []);

  const getNewDog = (e) => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setDog(data.message));
  };

  const arrowKeys = (e) => {
    if (e.key === "ArrowLeft") {
      //move on to next dog

      getNewDog();
    } else if (e.key === "ArrowRight") {
      //put current dog picture in adopted array, then get new dog picture

      adoptDog([...adopted, dog]);
      getNewDog();
    }
  };

  //componentDidUpdate
  useEffect(() => {
    window.addEventListener("keydown", arrowKeys);
    let tempTime = 5;
    const myTimer = setInterval(() => {
      setTimeRemaining(tempTime);
      if (tempTime > 0) {
        tempTime = tempTime - 1;
      } else {
        clearInterval(myTimer);
        getNewDog();
      }
    }, 1000);
    //componentWillUnmount
    return () => {
      window.removeEventListener("keydown", arrowKeys);
      clearInterval(myTimer);
    };
  }, [dog]);

  return (
    <div className="app">
      <h1>Doggie Speed Dating</h1>
      <h3>
        Press the arrow keys on your keyboard. Left to skip, Right to Adopt.
      </h3>
      <h4>Current Dog</h4>
      <section className="current">
        <img src={dog} width="300px" height="300px" />
      </section>
      <h4>Time Remaining: {timeRemaining}</h4>
      <h4>Adopted Dogs</h4>
      <section className="adopted">
        {adopted.map((dogUrl) => {
          return <img src={dogUrl} width="150px" height="150px" />;
        })}
      </section>
    </div>
  );
}

//Render the application
ReactDOM.render(<App />, document.getElementById("root"));
