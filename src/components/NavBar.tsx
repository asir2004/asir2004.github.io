import { Link, useLocation } from 'react-router-dom';
import Lottie from 'lottie-react';
import navBarLogoAnimationJSON from '../assets/MarkView NavBar Leading Animation v1.json'

type NavBarLinkProps = {
  to: string;
  label: string;
  isActive: boolean;
}

function NavBarLinkItem({ to, label, isActive }: NavBarLinkProps) {
  return (
    <li className="relative">
      <Link to={to} className={`hover:text-gray-950 transition-colors duration-200 ${isActive ? 'text-gray-700' : 'text-gray-500'}`}>
        {label}
      </Link>
      {isActive && (
        <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gray-500 rounded-full"></span>
      )}
    </li>
  )
}

function NavBar() {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname.startsWith(path)
  }

  const navItems = [
    { to: '/projects/', label: 'Projects' },
    { to: '/contact/', label: 'Contact' },
    { to: '/process/', label: 'Process' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-50/70 z-50 backdrop-blur-lg">
      <div className="max-w-5xl flex justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start h-16">
          <ul className="flex space-x-6">
            <li>
              <Link to="/">
                <Lottie id={"NavBarLottieAnim"} animationData={navBarLogoAnimationJSON} loop={false} className='-translate-x-6 h-8 invert' />
              </Link>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="flex items-center justify-end h-16">
          <ul className="flex space-x-6">
            {navItems.map(({ to, label }) => (
              <NavBarLinkItem
                key={to}
                to={to}
                label={label}
                isActive={isActive(to)}
              />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;