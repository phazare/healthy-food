import { configureStore } from "@reduxjs/toolkit";
import postRecipeReducerSlice from "./postRecipeReducerSlice";

const recipeStore = configureStore({
  reducer: {
    recipes: postRecipeReducerSlice,
  }
})

export default recipeStore;