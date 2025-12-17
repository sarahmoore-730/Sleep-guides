import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { GuideDetailPage } from './pages/GuideDetailPage';
import './styles/theme.css';

export function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/guide/:id" element={<GuideDetailPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
