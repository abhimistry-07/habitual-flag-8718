import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import CoursesPage from './Pages/CoursesPage';
import { Route, Routes } from 'react-router-dom';
import SingleCoursePage from './Pages/SingleCoursePage';
import LoginPage from './Pages/Login';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
      <Route path="/courses/:user_id" element={<SingleCoursePage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
