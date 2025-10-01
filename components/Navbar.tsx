export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="section flex items-center justify-between h-14">
        <a href="#" className="font-semibold">Sofiat Ajide</a>
        <ul className="flex items-center gap-6 text-sm">
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
          <li>
            <a
              href="/Sofiat_Ajide_Resume.pdf"
              className="px-3 py-1.5 rounded-full border border-gray-300 hover:bg-gray-50"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
