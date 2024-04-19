import { Route, Routes } from "react-router";
import Favourites from "./components/Favourites";
import Home from "./components/Home";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/Favourite" element={<Favourites/>} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;