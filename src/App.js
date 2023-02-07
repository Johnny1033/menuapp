import React, { useState, useEffect } from "react";
import { Helmet } from 'react-helmet';

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

  const keto = [  
    "Baked salmon with Avocado Sauce",  
    "Cauliflower Fried Rice with Chicken",  
    "Zucchini Noodles with Meat Sauce",  
    "Cabbage Roll Casserole",  "Cheeseburger Salad with Thousand Island Dressing",  "Stuffed Bell Peppers with Ground Beef",  "Grilled Pork Chops with Roasted Broccoli",  "Low Carb Meatloaf with Mashed Cauliflower",  "Cauliflower Pizza Crust with Pepperoni",  "Keto Chicken Parmesan",  "Sautéed Shrimp with Garlic and Butter",  "Steak Fajita Bowl with Cauliflower Rice",  "Keto Chicken Alfredo with Zucchini Noodles",  "Low Carb Beef and Broccoli Stir-Fry",  "Bacon Wrapped Pork Tenderloin with Green Beans",  "Shepherds Pie with Cauliflower Mash",  "Keto Meatballs with Tomato Sauce and Zucchini Noodles",  "Keto Tuna Salad with Avocado Oil Mayonnaise",  "Low Carb Chicken Enchiladas with Cheese Sauce",  "Baked Chicken Thighs with Asparagus",  "Keto Buffalo Chicken Salad",  "Keto Beef and Mushroom Stir-Fry",  "Keto Creamy Garlic Shrimp with Broccoli",  "Keto Bacon Cheeseburger Casserole",  "Keto Cauliflower Mac and Cheese",  "Low Carb Beef Stir-Fry with Vegetables",  "Keto Chicken and Broccoli Casserole",  "Keto Shrimp Scampi with Zucchini Noodles",  "Low Carb Pork Chops with Apple Cider Vinegar",  "Keto Beef and Broccoli Soup",  "Keto Turkey Meatballs with Marinara Sauce",  "Keto Bacon Wrapped Asparagus",  "Keto Tuna Salad Stuffed Avocados",  "Keto Spaghetti Squash with Meat Sauce",  "Low Carb Chicken Fajitas with Peppers and Onions",  "Keto Baked Salmon with Lemon and Herbs",  "Keto BLT Salad with Avocado",  "Keto Grilled Steak with Chimichurri Sauce",  "Low Carb Chicken Stir-Fry with Peanut Sauce",  "Keto Cheesy Broccoli and Chicken Casserole",  "Keto Chicken and Vegetable Soup",  "Keto Beef and Vegetable Stir-Fry",  "Low Carb Pork Tenderloin with Rosemary and Garlic",  "Keto Grilled Chicken with Avocado Salsa",  "Keto Shrimp and Grits with Cauliflower Grits",  "Keto BBQ Ribs with Coleslaw",  "Keto Beef Tacos with Lettuce Wraps",  "Keto Chicken Caesar Salad",  "Keto Grilled Shrimp Skewers with Lemon and Garlic"];

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
  const [selectedKeto, setSelectedKeto] = useState([]);
  const [selectedVegetarian, setSelectedVegetarian] = useState([]);

  useEffect(() => {
    const shuffledMain = main.sort(() => 0.5 - Math.random());
    const newSelectedMain = shuffledMain.slice(0, 5);
    setSelectedMain(newSelectedMain);
    
    const shuffledKeto = keto.sort(() => 0.5 - Math.random());
    const newSelectedKeto = shuffledKeto.slice(0, 5);
    setSelectedKeto(newSelectedKeto);

    const shuffledVegetarian = vegetarian.sort(() => 0.5 - Math.random());
    const newSelectedVegetarian = shuffledVegetarian.slice(0, 5);
    setSelectedVegetarian(newSelectedVegetarian);
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
          <h3 style={{ textAlign: "center", fontSize: "30px", textShadow: "1px 1px #aaa, 2px 2px #003366" }}>Keto</h3>
          <ul>
            {selectedKeto.map((item, index) => (
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
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        <button onClick={() => window.location.reload(false)}>Refresh Options
        </button>
      </div>
      <Helmet>
        <title>Meal Planner | Plan A Menu Of Simple Healthy Meals</title>
        <meta name="description" content="Plan and organize meals with healthy, tasty, and convenient meal options that fit your lifestyle and nutrition needs." />
        <meta name="keywords" content="Food, Recipes, Meals, Plan, Organize, Customize, Healthy, Tasty, Convenient, Lifestyle, Efficient, Nutritional, User-friendly, Innovative" />
      </Helmet>
    </div>
  );  
};

export default App;