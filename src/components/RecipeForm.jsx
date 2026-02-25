import { useState } from "react";

function RecipeForm({ onAddRecipe }) {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required.";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required.";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title: title.trim(),
      ingredients: ingredients.trim(),
      instructions: instructions.trim(),
    };

    onAddRecipe(newRecipe);
    setTitle("");
    setIngredients("");
    setInstructions("");
    setErrors({});
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <h2>Add a New Recipe</h2>

      <div className="form-group">
        <label htmlFor="title">Recipe Title</label>
        <input
          id="title"
          type="text"
          placeholder="e.g. Spaghetti Carbonara"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? "input-error" : ""}
        />
        {errors.title && <span className="error-message">{errors.title}</span>}
      </div>

      <div className="form-group">
        <label htmlFor="ingredients">Ingredients</label>
        <textarea
          id="ingredients"
          placeholder="List your ingredients, one per line..."
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          rows={4}
          className={errors.ingredients ? "input-error" : ""}
        />
        {errors.ingredients && (
          <span className="error-message">{errors.ingredients}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="instructions">Instructions</label>
        <textarea
          id="instructions"
          placeholder="Describe the cooking steps..."
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          rows={5}
          className={errors.instructions ? "input-error" : ""}
        />
        {errors.instructions && (
          <span className="error-message">{errors.instructions}</span>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Add Recipe
      </button>
    </form>
  );
}

export default RecipeForm;