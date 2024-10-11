import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecipes } from "../../store/postRecipeReducerSlice";
import Loading from "./Loading";
import NoRecipe from "./NoRecipe";
import Recipes from "./Recipes";
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";

const RecipeList = () => {
  const dispatch = useDispatch();
  let recipes = useSelector((state) => state.recipes.recipes);
  const status = useSelector((state) => state.recipes.status);
  const [filterRecipes, setFilterRecipes] = useState(recipes);
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchRecipes());
    }
  }, [dispatch, status]);

  useEffect(() => {
    setFilterRecipes(recipes);
  }, [recipes]);

  const handleKeyPress = (event) => {
    const searchKey = event.target.value.toLowerCase();
    if (event.target.value.trim("") === "") {
      setFilterRecipes(recipes);
    } else {
      const filteredRecipes = recipes.filter((item) => {
        return item.name.toLowerCase().includes(searchKey);
      });
      setFilterRecipes(filteredRecipes);
    }
  };

  const sort = (val) => {
    let items;
    if (val === "up") {
      items = [...filterRecipes].sort((a, b) => a.name.localeCompare(b.name));
    } else {
      items = [...filterRecipes].sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilterRecipes(items);
  };

  return (
    <>
      <div className="row my-4 mx-5">
        <div className="col-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control shadow-none"
              placeholder="Search Recipe"
              aria-label="Search Recipe"
              aria-describedby="button-addon2"
              onInput={handleKeyPress}
            />
          </div>
        </div>
        <div className="col-7">
          <div className="align-items-center d-flex justify-content-start">
            <span className="fw-bold mx-2">Sort:</span>
            <FaSortAlphaDown
              onClick={() => {
                sort("up");
              }}
              className="mx-2 cursor-pointer"
            />
            <FaSortAlphaUp
              onClick={() => {
                sort("down");
              }}
              className="mx-2 cursor-pointer"
            />
          </div>
        </div>
      </div>
      {status === "loading" && <Loading />}
      {status !== "loading" &&
        status === "succeed" &&
        filterRecipes.length === 0 && <NoRecipe />}
      {status === "succeed" && <Recipes recipes={filterRecipes} />}
    </>
  );
};
export default RecipeList;
