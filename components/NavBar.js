import Link from 'next/link';
import { useRouter } from 'next/router';

const NavBar = () => {
  const router = useRouter();

  const isActive = (route) => {
    if (route === router.pathname) {
      return 'active'
    } 

    else ''
  }

  return (
    <nav>
      <div class="nav-wrapper blue darken-3">
        <Link href="/">
          <a class="brand-logo">Logo</a>
        </Link>

        <ul id="nav-mobile" class="right">
          <li className={isActive('/login')}>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
          <li className={isActive('/signup')}>
            <Link href="/signup">
              <a>Signup</a>
            </Link>
          </li>
          <li className={isActive('/create')}>
            <Link href="/create">
              <a>Create</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
