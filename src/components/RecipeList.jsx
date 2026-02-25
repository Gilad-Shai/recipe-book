import RecipeCard from './RecipeCard';

const RecipeList = ({ recipes, onDelete }) => {
  if (recipes.length === 0) {
    return (
      <div className="empty-state">
        <p>No recipes yet. Add your first recipe above!</p>
      </div>
    );
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default RecipeList;