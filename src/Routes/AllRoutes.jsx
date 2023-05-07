import { Route, Routes } from 'react-router-dom';
import HomePage from "../Pages/HomePage";
import CoursesPage from "../Pages/CoursesPage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
    </Routes>
  );
};

export default AllRoutes;
