import React, { useState } from 'react';

const RecipeCard = ({ recipe, onDelete }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="recipe-card">
      <div className="recipe-card-header">
        <h3 className="recipe-title">{recipe.title}</h3>
        <div className="recipe-card-actions">
          <button
            className="btn btn-toggle"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? 'Hide Details' : 'Show Details'}
          </button>
          <button
            className="btn btn-delete"
            onClick={() => onDelete(recipe.id)}
          >
            Delete
          </button>
        </div>
      </div>

      {expanded && (
        <div className="recipe-details">
          <div className="recipe-section">
            <h4>Ingredients</h4>
            <ul className="ingredients-list">
              {recipe.ingredients
                .split('\n')
                .filter((line) => line.trim() !== '')
                .map((ingredient, index) => (
                  <li key={index}>{ingredient.trim()}</li>
                ))}
            </ul>
          </div>

          <div className="recipe-section">
            <h4>Instructions</h4>
            <ol className="instructions-list">
              {recipe.instructions
                .split('\n')
                .filter((line) => line.trim() !== '')
                .map((step, index) => (
                  <li key={index}>{step.trim()}</li>
                ))}
            </ol>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeCard;