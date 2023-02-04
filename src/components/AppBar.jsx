import { Link } from 'react-router-dom';
import { UserMenu } from './UserMenu';
import { useSelector } from 'react-redux';

export const AppBar = () => {
    const isLogIn = useSelector(state=> state.user.isLoggedIn)
  return (
    <header>
      <nav>
              <Link to={'/login'}>Log-in</Link>
              {isLogIn && <UserMenu/>}
      </nav>
    </header>
  );
};
