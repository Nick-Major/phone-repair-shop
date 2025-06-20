import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id/details" element={<ServiceDetailsPage />} />
      </Routes>
    </Router>
  );
};

export default App;
