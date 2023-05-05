//These dependencies for the file
import React from "react"; //connects to React
import "./App.css"; //connects to the css file

const App = () => {
  /*initializes the state with useState 
    items stores the API response */
  const [items, setItems] = React.useState([]);

  //boolean tracks if data finished loading
  const [isDataLoaded, setIsDataLoaded] = React.useState(false);


  React.useEffect(() => {
    //fetch function grabs the data from the api by using GEt request
    fetch("https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873&timezone=UTC&date=today")
      
      //converts to json file
      .then((res) => res.json())
      .then((json) => {

        //updates the file
        setItems(json); 
        setIsDataLoaded(true);
      });
  }, []);

  //checks whether data is loaded or not 
  if (!isDataLoaded) {
    return (
      <div>
        {/*prints this is the data is loading*/}
        <h1> Current data is still loading</h1>
      </div>
    );
  }

  //returns the times 
  return (
    <div className="App">
      <h1 id = "title"> Times for Sunrise, Sunset and Dusk</h1>
        <ul>
        {/*the results help to print out the times*/}
          <li>Sunrise: {items.results.sunrise}</li> 
          <li> Sunset: {items.results.sunset}</li>
          <li> Dusk: {items.results.dusk}</li>
        </ul>
      
    </div>
  );
};

export default App;