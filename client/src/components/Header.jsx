import { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./Burger-menu.jsx";
import logo_mobile from "../assets/logo_wide_small.png";
import logo from "../assets/logo_wide_large.png";

const links = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Materiais", to: "/materiais" },
  { label: "Contato", to: "/contato" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // todo: baixar imagem logo_mobile com qualidade maior
  return (
    <>
      <div className="h-24 w-full"></div>
      <header className="fixed h-24 bg-bg-200/20 w-full flex items-center justify-between border-b border-bg-200 px-4 md:px-8 backdrop-blur-md z-999">
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo_mobile}
            alt="Logo"
            className="md:hidden h-16 hover:scale-102 transform duration-150"
          />
          <img
            src={logo}
            alt="Logo"
            className="hidden md:block h-16 hover:scale-102 transform duration-150"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-font hover:text-primary font-nunito-sans"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden flex items-center justify-center h-11 w-11 rounded-lg text-primary hover:bg-bg-200/50 cursor-pointer transition-colors"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {isMenuOpen && (
          <BurgerMenu links={links} onClose={() => setIsMenuOpen(false)} />
        )}
      </header>
    </>
  );
}

export default Header;
