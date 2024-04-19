import { Route, Routes } from "react-router";
import Favourites from "./components/Favourites";
import Home from "./components/Home";

const AllRoutes = ({data, setData}) => {
  return (
    <>
      <Routes>
        <Route path="/Favourite" element={<Favourites/>} />
        <Route path="/" element={<Home data={data} setData={setData}/>} />
      </Routes>
    </>
  );
};

export default AllRoutes;