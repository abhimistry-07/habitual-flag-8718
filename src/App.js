import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';
import CoursesPage from './Pages/CoursesPage';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/courses" element={<CoursesPage />} />
    </Routes>
  );
}

export default App;
