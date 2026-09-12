import logoText from "../assets/logo-text.png";
import HamburgerMenu from "../assets/hamburger.png";
const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-[68px] max-w-[1080px] items-center justify-between px-5 lg:px-0">

        {/* Mobile Hamburger */}
        <button className="block text-gray-700 lg:hidden">
        <img
            src={HamburgerMenu}
            alt="Hamburger Menu"
            className="h-5 w-6"
        />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src={logoText}
            alt="Dev Stack Logo"
            className="h-8 w-full rounded-lg object-cover"
          />

        </div>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 lg:flex">
          <a
            href="#"
            className="text-sm font-medium text-pink-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#projects"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500 "
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Sign In / Sign Up */}
        <div className="flex items-center gap-8.75">
          <button className="text-sm font-medium text-gray-700 cursor-pointer">
            Sign In
          </button>

          <button className="brand-gradient rounded-full px-5 py-2.5 text-sm font-semibold text-white cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;