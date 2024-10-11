import { Link } from "react-router-dom";
const Recipes = ({ recipes }) => {
  return (
    <>
      <div className="row mx-5">
        {recipes.map((recipe) => (
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-3" key={recipe.id}>
            <div className="card border-0">
              <img src={`${recipe.image}`} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>
                <p className="detail mb-1">
                  <span>Cuisine: </span>
                  <span>{recipe.cuisine}</span>
                </p>
                <p className="detail mb-1">
                  <span>Calories per serving: </span>
                  <span>{recipe.caloriesPerServing} Cal</span>
                </p>
                <p className="mb-2">
                  {recipe.tags.map((tag) => (
                    <span key={tag} className="badge text-bg-info mx-1">{tag}</span>
                  ))}
                </p>
                <Link
                  to={`/healthy-food/recipe-detail/${recipe.id}`}
                  className="btn btn-dark mt-2"
                >
                  View Recipe
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Recipes;
