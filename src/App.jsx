import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './assets/components/pages/LoginPage.jsx';
import Dashboard from './assets/components/pages/Dasboard.jsx'; // Cập nhật đường dẫn
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default App;