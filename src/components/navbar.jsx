const Navbar = () => {
  return (
    <div>
      <nav className="top-bar fixed top-0 left-0 right-0 z-50 bg-white shadow-md py-4 px-4 md:px-[120px]">
      <div className="logo">
        <img src="src/assets/Logo.png" alt="Logo Videobelajar" className="h-7 md:h-8" />
      </div>
      <ul className="hidden md:flex space-x-4 ml-auto">
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;