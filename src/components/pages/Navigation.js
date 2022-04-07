import { NavLink, Outlet } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="counter">Counter</NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export { Navigation };
