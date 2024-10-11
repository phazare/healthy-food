import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRecipes = createAsyncThunk(
  "recipes/fetchRecipes",
  async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    return data.recipes;
  }
);

const postRecipeReducerSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    status: 'idle',  
    error: null
  },
  reducers: {
    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecipes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchRecipes.fulfilled, (state, action) => {
        state.status = "succeed";
        state.recipes = action.payload;
      })
      .addCase(fetchRecipes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});


export const { addRecipe } = postRecipeReducerSlice.actions;
export default postRecipeReducerSlice.reducer;
