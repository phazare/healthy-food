import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import RecipeContainer from "./components/recipes/RecipeContainer";
import recipeStore from "./store/recipeStore";
import RecipeList from "./components/recipes/RecipeList";
import RecipeDetail from "./components/recipes/RecipeDetail";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/healthy-food/",
      element: <RecipeContainer />,
      children: [
        {
          path: "",
          element: <RecipeList />,
        },
        {
          path: "/healthy-food/recipe-detail/:id",
          element: <RecipeDetail />,
        },
      ],
    },
  ]);
  return (
    <Provider store={recipeStore}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
