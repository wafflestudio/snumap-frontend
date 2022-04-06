import { Routes, Route, Navigate } from 'react-router-dom';
import style from './App.module.scss';
import Community from './Components/Community/Community';
import Search from './Components/Search/Search';

const App = () => {
  return (
    <div className={style.App}>
      <Routes>
        <Route path="/search" element={<Search />} />
        <Route path="/search/*" element={<Navigate to="/search" replace />} />
        <Route path="/community" element={<Community />} />
        <Route
          path="/community/*"
          element={<Navigate to="/community" replace />}
        />
        <Route path="*" element={<Navigate to="/community" replace />} />
      </Routes>
    </div>
  );
};

export default App;
