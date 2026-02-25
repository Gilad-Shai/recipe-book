import { useState } from 'react';
import RecipeForm from './components/RecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: 'Classic Pancakes',
      ingredients: 'Flour, eggs, milk, butter, sugar, baking powder, salt',
      instructions: 'Mix dry ingredients. In another bowl, mix wet ingredients. Combine both mixtures. Cook on a greased pan over medium heat until bubbles form, then flip and cook until golden.',
    },
    {
      id: 2,
      title: 'Spaghetti Bolognese',
      ingredients: 'Spaghetti, ground beef, tomato sauce, onion, garlic, olive oil, Italian herbs, salt, pepper',
      instructions: 'Cook spaghetti per package instructions. Sauté onion and garlic in oil. Add beef and brown. Add tomato sauce and herbs. Simmer 20 minutes. Serve over pasta.',
    },
  ]);

  const addRecipe = (recipe) => {
    const newRecipe = {
      ...recipe,
      id: Date.now(),
    };
    setRecipes((prev) => [newRecipe, ...prev]);
  };

  const deleteRecipe = (id) => {
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🍽️ Recipe Manager</h1>
        <p>Save and manage your favorite recipes</p>
      </header>
      <main className="app-main">
        <RecipeForm onAddRecipe={addRecipe} />
        <RecipeList recipes={recipes} onDeleteRecipe={deleteRecipe} />
      </main>
    </div>
  );
}

export default App;