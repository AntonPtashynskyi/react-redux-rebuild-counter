import { Route, Routes } from 'react-router';

import { Navigation } from './pages/Navigation';
import { HomePage } from './pages/HomePage';
import Counter from './component/Counter';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="counter" element={<Counter />} />
        </Route>
      </Routes>
    </>
  );
};
