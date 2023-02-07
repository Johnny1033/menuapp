import React, { useState, useEffect } from "react";

const App = () => {
  
  const main = ["steak", "pork chop", "bbq chicken", "hot dog", 
  "hamburger", "balsamic chicken", "adobo pork", "bangers", 
  "steak fajitas", "beef stroganoff", "blackened pork tenderloin", 
  "buffalo chicken", "chicken and dumplings", "chicken curry", 
  "chicken fajitas", "chicken caesar", "chili", "fish and chips", 
  "disney stew", "grilled cheese", "guinness stew", "hoppin john", 
  "jambalaya", "pot roast", "mustard balsamic pork", "salmon", "tuna", 
  "enchilada casserole", "frozen pizza"];

  const side = ["baked potato", "baked beans", "broccoli", 
  "cauliflower", "corn", "green beans", "mashed potatoes", 
  "mac and cheese", "pasta salad", "potato salad", "rice", 
  "roasted potatoes", "salad", "sweet potato", "vegetable medley", 
  "zucchini"];

  const vegetarian = ["falafel", "vegetarian chili", 
  "creamy cheese polenta with ratatouille", "curried pumpkin soup", 
  "tofu stroganoff", "pasta with tomato cream sauce", 
  "cheese ravioli", "lasagna", "omelettes and pancakes", 
  "bean burritos", "cheese pizza", "eggplant parmesan", 
  "vegetable stir fry", "veggie spaghetti", "vegetable pot pie", 
  "pimento cheese sandwiches", "grilled cheese"];

  const [selectedMain, setSelectedMain] = useState([]);
  const [selectedSide, setSelectedSide] = useState([]);
  const [selectedVegetarian, setSelectedVegetarian] = useState([]);

  useEffect(() => {
    const shuffledMain = main.sort(() => 0.5 - Math.random());
    const newSelectedMain = shuffledMain.slice(0, 5);
    setSelectedMain(newSelectedMain);
    
    const shuffledSide = side.sort(() => 0.5 - Math.random());
    const newSelectedSide = shuffledSide.slice(0, 5);
    setSelectedSide(newSelectedSide);

    const shuffledVegetarian = vegetarian.sort(() => 0.5 - Math.random());
    const newSelectedVegetarian = shuffledVegetarian.slice(0, 5);
    setSelectedVegetarian(newSelectedVegetarian);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ textAlign: "center", fontSize: "40px", textShadow: "1px 1px #003366, 2px 2px #aaa, 3px 3px #888" }}>Banana Labs Menu Generator</h1>
      <div style={{ display: "flex", justifyContent: "space-between", margin: "1px" }}>
        <div style={{ display: "flex", flexDirection: "column", width: "30%", marginRight: "100px" }}>
          <h3 style={{ textAlign: "center", fontSize: "30px", textShadow: "1px 1px #aaa, 2px 2px #003366" }}>Main</h3>
          <ul>
            {selectedMain.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "30%", marginRight: "100px" }}>
          <h3 style={{ textAlign: "center", fontSize: "30px", textShadow: "1px 1px #aaa, 2px 2px #003366" }}>Side</h3>
          <ul>
            {selectedSide.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column", width: "30%" }}>
          <h3 style={{ textAlign: "center", fontSize: "30px", textShadow: "1px 1px #aaa, 2px 2px #003366" }}>Vegetarian</h3>
          <ul>
            {selectedVegetarian.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button onClick={() => window.location.reload(false)}>Refresh Options
        </button>
      </div>
    </div>
  );  
};

export default App;