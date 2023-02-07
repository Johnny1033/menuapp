import React, { useState, useEffect } from "react";

const App = () => {
  
  const main = [  "Steak", 
    "Pork Chop", 
    "Bbq Chicken", 
    "Hot Dog", 
    "Hamburger", 
    "Balsamic Chicken", 
    "Adobo Pork", 
    "Bangers", 
    "Steak Fajitas", 
    "Beef Stroganoff", 
    "Blackened Pork Tenderloin", 
    "Buffalo Chicken", 
    "Chicken and Dumplings", 
    "Chicken Curry", 
    "Chicken Fajitas", 
    "Chicken Caesar", 
    "Chili", 
    "Fish and Chips", 
    "Disney Stew", 
    "Grilled Cheese", 
    "Guinness Stew", 
    "Hoppin John", 
    "Jambalaya", 
    "Pot Roast", 
    "Mustard Balsamic Pork", 
    "Salmon", 
    "Tuna", 
    "Enchilada Casserole", 
    "Frozen Pizza", 
    "Beef Stir Fry", 
    "Chicken Fajitas", 
    "Pork Chops", 
    "Beef Burgers", 
    "Meatball Subs", 
    "Beef Tacos", 
    "Chicken Alfredo", 
    "Baked Ham", 
    "Beef Roast", 
    "Chicken Teriyaki", 
    "Pork Ribs", 
    "Beef Steak", 
    "Beef Wellington", 
    "BBQ Pulled Pork Sandwiches", 
    "Roasted Turkey", 
    "Beef and Broccoli Stir Fry", 
    "Beef and Noodles", 
    "Chicken Parmesan", 
    "Grilled Pork Tenderloin", 
    "Lamb Chops", 
    "Beef Tenderloin", 
    "Baked Chicken", 
    "Beef Bolognese", 
    "Beef and Mushroom Stir Fry", 
    "Beef and Vegetable Stir Fry", 
    "Beef and Rice", 
    "Meatloaf", 
    "Beef and Gravy", 
    "Beef and Tomato Stir Fry", 
    "Beef and Onion Stir Fry", 
    "Beef and Pepper Stir Fry", 
    "Beef and Bean Stir Fry", 
    "Beef and Carrot Stir Fry", 
    "Beef and Potato Stir Fry", 
    "Beef and Cabbage Stir Fry", 
    "Beef and Squash Stir Fry", 
    "Beef and Broccoli Casserole", 
    "Beef and Mushroom Casserole", 
    "Beef and Vegetable Casserole", 
    "Beef and Rice Casserole", 
    "Beef and Gravy Casserole", 
    "Beef and Tomato Casserole", 
    "Beef and Onion Casserole", 
    "Beef and Pepper Casserole", 
    "Beef and Bean Casserole", 
    "Beef and Carrot Casserole", 
    "Beef and Potato Casserole", 
    "Beef and Cabbage Casserole", 
    "Beef and Squash Casserole"];

  const side = [  
    "Baked Potato",   
    "Baked Beans",   
    "Broccoli",   
    "Cauliflower",   
    "Corn",   
    "Green Beans",   
    "Mashed Potatoes",   
    "Mac and Cheese",   
    "Pasta Salad",   
    "Potato Salad",   
    "Rice",   
    "Roasted Potatoes",   
    "Salad",   
    "Sweet Potato",   
    "Vegetable Medley",   
    "Zucchini",
    "Mashed Potatoes",   
    "Roasted Vegetables",   
    "Steamed Rice",   
    "Baked Mac and Cheese",   
    "Garlic Bread",   
    "Roasted Potatoes",   
    "Grilled Asparagus",   
    "Steamed Broccoli",   
    "Baked Sweet Potato",   
    "Corn on the Cob",  
    "Baked Beans",  
    "Roasted Carrots",  
    "Steamed Peas",  
    "Fried Rice",  
    "Stuffed Bell Peppers",  
    "Cauliflower Rice",  
    "Grilled Zucchini",  
    "Steamed Green Beans",  
    "Baked Squash",  
    "Sauteed Spinach",  
    "Roasted Brussels Sprouts",  
    "Steamed Cauliflower",  
    "Baked Yam",  
    "Grilled Eggplant",  
    "Fried Okra",  
    "Steamed Cabbage",  
    "Baked Artichoke",  
    "Roasted Radicchio",  
    "Grilled Portobello Mushroom",  
    "Steamed Kale",  
    "Baked Potatoes",  
    "Roasted Beets",  
    "Grilled Pineapple",  
    "Steamed Sweet Potato",  
    "Baked Butternut Squash",  
    "Roasted Turnips",  
    "Grilled Eggplant with Tomato",  
    "Steamed Leeks",  
    "Baked Acorn Squash",  
    "Roasted Red Peppers",  
    "Grilled Tomatoes",  
    "Steamed Carrots",  
    "Baked Spaghetti Squash",  
    "Roasted Parsnips",  
    "Grilled Squash",  
    "Steamed Sweet Peppers",  
    "Baked Delicata Squash",  
    "Roasted Fennel",  
    "Grilled Sweet Potato",  
    "Steamed Yellow Squash",  
    "Baked Kabocha Squash",  
    "Roasted Cauliflower"];

  const vegetarian = [
    "Falafel", 
    "Vegetarian Chili", 
    "Creamy Cheese Polenta With Ratatouille", 
    "Curried Pumpkin Soup", 
    "Tofu Stroganoff", 
    "Past With Tomato Cream Sauce", 
    "Cheese Ravioli", 
    "Lasagna", 
    "Omelettes and Pancakes", 
    "Bean Burritos", 
    "Cheese Pizza", 
    "Eggplant Parmesan", 
    "Vegetable Stir Fry", 
    "Veggie Spaghetti", 
    "Vegetable Pot Pie", 
    "Pimento Cheese Sandwiches", 
    "Grilled Cheese", 
    "Stuffed Bell Peppers",
    "Vegetable Stir Fry", 
    "Spinach and Feta Stuffed Portobello Mushrooms",
    "Roasted Vegetable Lasagna", 
    "Grilled Eggplant Sandwiches", 
    "Quinoa and Black Bean Salad", 
    "Spicy Chickpea and Sweet Potato Bowl",
    "Ratatouille", 
    "Vegetable Paella", 
    "Vegetable Curry", 
    "Veggie Quesadillas",
    "Spinach and Artichoke Stuffed Shells", 
    "Tomato and Basil Risotto", 
    "Cauliflower and Broccoli Alfredo", 
    "Veggie and Hummus Pita Pockets",
    "Vegetable and Tofu Skewers", 
    "Spicy Lentil and Vegetable Soup",
    "Tomato and Zucchini Gratin", 
    "Grilled Vegetable and Halloumi Skewers",
    "Tomato and Avocado Pasta Salad", 
    "Vegetable and Pesto Pizza",
    "Stuffed Zucchini Boats", 
    "Vegetable and Black Bean Tacos",
    "Roasted Cauliflower and Chickpea Salad", 
    "Eggplant and Tofu Parmesan",
    "Vegetable and Rice Bowl", 
    "Vegetable and Tofu Scramble",
    "Stuffed Butternut Squash", 
    "Vegetable and Feta Omelette",
    "Tomato and Mozzarella Stuffed Eggplant", 
    "Spicy Sweet Potato and Black Bean Tacos", 
    "Grilled Vegetable and Pesto Panini", 
    "Vegetable and Mushroom Risotto",
    "Stuffed Tomatoes with Rice and Veggies", 
    "Vegetable and Tofu Pad Thai",
    "Spinach and Feta Stuffed Tomatoes", 
    "Roasted Vegetable and Quinoa Salad",
    "Grilled Vegetable and Hummus Wrap", 
    "Roasted Vegetable and Tofu Skewers",
    "Vegetable and Cheese Stuffed Shells", 
    "Spicy Vegetable and Tofu Stir Fry",
    "Tomato and Basil Pasta", 
    "Roasted Vegetable and Tofu Bowl",
    "Vegetable and Pesto Stuffed Portobello Mushrooms", 
    "Vegetable and Tofu Tacos",
    "Grilled Vegetable and Tofu Sandwich", 
    "Vegetable and Bean Chili",
    "Roasted Vegetable and Feta Salad", 
    "Vegetable and Tofu Skewers with Peanut Sauce", 
    "Stuffed Acorn Squash with Rice and Veggies", 
    "Vegetable and Tofu Enchiladas"];

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

    const meta = {
      title: 'ChatGPT Powered Menu Generator',
      description: 'Plan and organize your favorite meals with ease using our menu website. Create customized meal plans for a healthier and tastier lifestyle.',
      canonical: 'http://example.com/path/to/page',
      meta: {
          charset: 'utf-8',
          keywords: 'food,mom hack,meals,plan,organize,customize,healthy,tasty,convenient,lifestyle,efficient,nutritional,chatgpt'
      }
    };
    

  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
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
      <DocumentMeta {...meta} />
    </div>
  );  
};

export default App;