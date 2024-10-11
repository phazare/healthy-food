import { Outlet } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

const RecipeContainer = () => {
  return (
    <>
      <Header />
      <div className="outlet-container mt-5 py-5">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default RecipeContainer;
