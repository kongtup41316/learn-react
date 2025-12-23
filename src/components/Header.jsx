import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="bg-gray-700 h-17 flex items-center tracking-wide">
      {/* logo */}
      <a href="/" className="font-bbh text-white ml-12 hover:text-red-500 transition-colors duration-300 flex items-center gap-5">
        <img src="../src/assets/logo/jaijai-logo.png" alt="my website logo" className="h-8"/>

        <span>JAIJAI - WEBSITE</span>
      </a>

      {/* navigation */}
      <nav className="font-bbh text-white ml-85 flex gap-10"> 
        <a className="hover:text-red-500 transition-colors duration-300" href="#">blog</a>
        <a className="hover:text-red-500 transition-colors duration-300" href="#">ABOUT</a>
        <a className="hover:text-red-500 transition-colors duration-300" href="#">PROJECTS</a>
        <a className="hover:text-red-500 transition-colors duration-300" href="#">RESUME</a>
        <a className="hover:text-red-500 transition-colors duration-300" href="#">CONTACT</a>
      </nav>

      {/* dark mode button */}
      <div className="ml-70">
        <DarkModeToggle />
      </div>
    </header>
  );
}
