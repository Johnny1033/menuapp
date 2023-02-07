import React from 'react';
import { Helmet } from 'react-helmet';

function helmetApp() {
    return (
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>MealEntropy - Food, Recipes, Meals, and More</title>
          <meta name="description" content="Plan, organize, and customize your meals with MealEntropy. Our platform offers healthy, tasty, and convenient meal options that fit your lifestyle and nutrition needs." />
          <meta name="keywords" content="Food, Recipes, Meals, Plan, Organize, Customize, Healthy, Tasty, Convenient, Lifestyle, Efficient, Nutritional, User-friendly, Innovative" />
        </Helmet>
        {/* Your component's content here */}
      </>
    );
  }
  

export default helmetApp;
