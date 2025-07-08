import React from "react";
import { Sun, Moon } from "lucide-react";

interface HeaderProps {
  isDarkMode?: boolean;
  onToggleTheme?: () => void;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode = true,
  onToggleTheme,
}) => {
  const navLinks = [
    { href: "/projects", label: "sobre" },
    { href: "/articles", label: "artigos" },
    { href: "/about", label: "projetos" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-black px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Nome + Título */}
        <div>
          <h1 className="text-base font-semibold text-white">Beatriz Soares</h1>
          <p className="text-sm text-neutral-500">Frontend Developer</p>
        </div>

        {/* Navegação + Botão Tema */}
        <div className="flex items-center gap-8">
          <button
            onClick={onToggleTheme}
            className="rounded-lg border border-neutral-800 bg-neutral-900 p-2 transition hover:border-neutral-700 hover:bg-neutral-800"
            aria-label="Alternar tema"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4 text-neutral-400" />
            ) : (
              <Moon className="h-4 w-4 text-neutral-400" />
            )}
          </button>

          <nav className="flex items-center gap-6 text-sm text-neutral-400">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-white"
              >
                /{link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
