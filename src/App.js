import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
