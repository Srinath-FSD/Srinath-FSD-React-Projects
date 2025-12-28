import { useEffect, useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("/recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div>
      <h2>Recipe List</h2>

      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.name}</h3>
          <p>Cooking Time: {recipe.time}</p>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
