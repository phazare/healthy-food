import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./RecipeDetail.module.css";
import Ingredients from "./Ingredients";
import RecipeInstruction from "./RecipeInstruction";
import RecipeReview from "./RecipeReview";

import { Link } from "react-router-dom";

const RecipeDetail = () => {
  const { id } = useParams();
  const recipes = useSelector((state) => state.recipes.recipes);
  const recipe = recipes.filter((x) => x.id == id)[0];
  return (
    <div className="m-5">
      <div className="align-items-start d-flex justify-content-start">
        <div className="col-lg-3 col-md-4">
          <img
            src={`${recipe.image}`}
            className={`img-thumbnail ${styles.img}`}
            alt=""
          />
        </div>
        <div className="col-lg-7 mx-md-3">
          <h3>{recipe.name}</h3>
          <div className="d-flex justify-content-between">
            <div className="">
              <div>
                <p className="detail mb-1">
                  <span>Cuisine: </span>
                  <span>{recipe.cuisine}</span>
                </p>
                <p className="detail mb-1">
                  <span>Difficulty: </span>
                  <span>{recipe.difficulty}</span>
                </p>
                <p className="detail mb-1">
                  <span>Meal Type: </span>
                  <span>{recipe.mealType}</span>
                </p>
                <p className="detail mb-1">
                  <span>Preparation Time: </span>
                  <span>{recipe.prepTimeMinutes} minutes</span>
                </p>
                <p className="detail mb-1">
                  <span>Cooking Time: </span>
                  <span>{recipe.cookTimeMinutes} minutes</span>
                </p>
                <p className="detail mb-1">
                  <span>Calories per serving: </span>
                  <span>{recipe.caloriesPerServing} Cal</span>
                </p>
                <p className="mb-2">
                  {recipe.tags.map((tag) => (
                    <span key={tag} className="badge text-bg-info mx-1">
                      {tag}
                    </span>
                  ))}
                </p>
              </div>
            </div>
            <div className="">
              <RecipeReview
                rating={recipe.rating}
                reviewCount={recipe.reviewCount}
              />
            </div>
          </div>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <Link to="/" className="btn btn-dark">
            Back
          </Link>
        </div>
      </div>
      <div className="row">
        <Ingredients ingredients={recipe.ingredients} />
      </div>
      <div className="row">
        <RecipeInstruction instructions={recipe.instructions} />
      </div>
    </div>
  );
};
export default RecipeDetail;
